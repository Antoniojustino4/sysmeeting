import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/campus')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta campus`);
      });
  }

  adicionar(campus: any): Promise<any> {
    return this.http.post('http://localhost:8080/campus', campus)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar campus: ${campus.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/campus/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir campus com o id: ${id}`);
      });
  }

  atualizar(campus: any): Promise<any> {
    return this.http.put(`http://localhost:8080/campus/${campus.id}`, campus)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar campus: ${campus.id}`);
    });
  }
}
