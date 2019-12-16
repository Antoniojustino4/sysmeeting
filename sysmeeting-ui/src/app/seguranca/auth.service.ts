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

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.carregarToken();
  }

  login(email: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .set('content-Type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    // headers.append

    const b = new HttpParams().set('grant_type', 'password').set('client', 'angular').set('username', email).set('password', senha);

    const body = `grant_type=password&client=angular&username=${email}&password=${senha}`;

    console.log(b);

    return this.http.post(this.oauthTokenUrl, { b }, { headers })
      .toPromise()
      .then(response =>
        console.log(response)
      ).catch(erro =>
        console.log(erro)
      );
  }

  limparAccessToken() {
    localStorage.removeItem('token');
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
        this.router.navigate(['/']);
      }
    }
  }
}

