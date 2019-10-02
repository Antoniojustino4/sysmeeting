import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiadoService {

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/orgoes/colegiado')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta colegiados`);
      });
  }

  adicionar(colegiado: any): Promise<any> {
    return this.http.post('http://localhost:8080/orgoes/colegiado', colegiado)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar colegiado: ${colegiado.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/orgoes/colegiado/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir orgao com o id: ${id}`);
      });
  }

  atualizar(colegiado: any): Promise<any> {
    return this.http.put(`http://localhost:8080/orgoes/colegiado/${colegiado.id}`, colegiado)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar orgao: ${colegiado.id}`);
    });
  }
}
