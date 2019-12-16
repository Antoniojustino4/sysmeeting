import { AuthService } from './../../seguranca/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColegiadoService {

  url = 'http://localhost:8080/orgoes/colegiado';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  consultarPeloId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(colegiado: any, id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/cursos/' + id + '/orgoes/colegiado', colegiado, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  atualizar(colegiado: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${colegiado.id}`, colegiado, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
