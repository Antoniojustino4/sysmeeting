import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NdeService {

  url = 'http://localhost:8080/orgoes/NDE';

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }
  consultarPeloId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  adicionar(nde: any): Promise<any> {
    return this.http.post('http://localhost:8080/cursos/4/orgoes/NDE', nde)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  atualizar(nde: any): Promise<any> {
    return this.http.put(`${this.url}/${nde.id}`, nde)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      alert(erro.error.message);
    });
  }
}
