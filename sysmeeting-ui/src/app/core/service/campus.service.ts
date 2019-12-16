import { AuthService } from './../../seguranca/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  url = 'http://localhost:8080/campus';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  resumo(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}` + '?resumo', { headers })
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();
    if (!filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.url}`, { params })
      .toPromise()
      .then(response => {
        const campus = response.valueOf();
        const resultado = {
          // campus, total: campus.totalElements;
        };
        return resultado;
      });
  }

  adicionar(campus: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post(`${this.url}`, campus, { headers })
      .toPromise()
      .then(response => response.valueOf());
  }

}
