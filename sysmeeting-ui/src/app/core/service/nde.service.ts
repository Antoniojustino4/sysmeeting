import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NdeService {

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/orgoes/NDE')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta ndes`);
      });
  }
  consultarPeloId(id: number): Promise<any> {
    return this.http.get(`http://localhost:8080/orgoes/NDE/${id}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta nde`);
      });
  }

  adicionar(nde: any): Promise<any> {
    return this.http.post('http://localhost:8080/cursos/4/orgoes/NDE', nde)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar nde: ${nde.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/orgoes/NDE/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir orgao com o id: ${id}`);
      });
  }

  atualizar(nde: any): Promise<any> {
    return this.http.put(`http://localhost:8080/orgoes/NDE/${nde.id}`, nde)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar orgao: ${nde.id}`);
    });
  }
}
