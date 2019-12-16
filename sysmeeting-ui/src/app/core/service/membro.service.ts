import { AuthService } from './../../seguranca/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  url = 'http://localhost:8080/membros';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  vincularPresidente(membro: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post(`${this.url}`, membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(membro: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/membros', membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(membro: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${membro.id}`, membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
