import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/membros')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta membros`);
      });
  }

  vincularPresidente(membro: any): Promise<any> {
    return this.http.post('http://localhost:8080/membros', membro)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar membro: ${membro.id}`);
      });
  }

  adicionar(membro: any): Promise<any> {
    return this.http.post('http://localhost:8080/membros', membro)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar membro: ${membro.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/membros/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir membro com o id: ${id}`);
      });
  }

  atualizar(membro: any): Promise<any> {
    return this.http.put(`http://localhost:8080/membros/${membro.id}`, membro)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar membro: ${membro.id}`);
    });
  }
}
