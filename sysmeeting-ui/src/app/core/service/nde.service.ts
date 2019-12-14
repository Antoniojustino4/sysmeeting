import { AuthService } from './../../seguranca/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NdeService {

  url = 'http://localhost:8080/orgoes/NDE';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
  consultarPeloId(id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(nde: any, id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/cursos/' + id + '/orgoes/NDE', nde, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(nde: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${nde.id}`, nde, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
