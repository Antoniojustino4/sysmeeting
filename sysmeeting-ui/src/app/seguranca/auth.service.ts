import { MensagemService } from './../core/mensagem.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

export class NotAuthenticatedError {

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  private jwtHelperService: JwtHelperService = new JwtHelperService();
  a: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.carregarToken();
  }

  login(email: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `grant_type=password&client=angular&username=${email}&password=${senha}`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.a = response;
        this.armazenarToken(this.a.access_token);
      }).catch(erro => {
        if (erro.status === 400) {
          if (erro.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida');
          }
        }
        return Promise.reject(erro);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.a = response;
        this.armazenarToken(this.a.access_token);
        return Promise.resolve(null);
      }).catch(erro => {
        console.log(erro);
        return Promise.resolve(null);
      });
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelperService.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    console.log(this.jwtPayload);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  fazerRequisicao() {
    if (this.isAccessTokenInvalido()) {
      console.log('Requisição http com token invalido');
      const chamadaNovoAccessToken = this.obterNovoAccessToken();
      if (this.isAccessTokenInvalido()) {
        this.router.navigate(['/login']);
      }
    }
  }
}

