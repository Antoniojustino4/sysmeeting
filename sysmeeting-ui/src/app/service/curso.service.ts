import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/cursos')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta cursos`);
      });
  }

  adicionar(curso: any): Promise<any> {
    return this.http.post('http://localhost:8080/cursos', curso)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar cursos: ${curso.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/cursos/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir curso com o id: ${id}`);
      });
  }

  atualizar(curso: any): Promise<any> {
    return this.http.put(`http://localhost:8080/cursos/${curso.id}`, curso)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar membro: ${curso.id}`);
    });
  }
}
