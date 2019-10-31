import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Campus {
  nome: string;
  cidade: string;
  cursos: Curso[];
}

export class Curso {
  nome: string;
  turno: string;
  modalidade: string;
  formacao: string;
  campus: Campus;
}

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  url = 'http://localhost:8080/campus';

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta campus`);
      });
  }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders();

    if (!filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.url}`, {headers, params})
      .toPromise()
      .then(response => {
        const campus = response.valueOf();
        const resultado = {
          // campus, total: campus.totalElements;
        };
        return resultado;
      })
      .catch(erro => {
        return Promise.reject(`Erro ao consulta campus`);
      });
  }

  adicionar(campus: any): Promise<any> {
    return this.http.post(`${this.url}`, campus)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar campus: ${campus.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir campus com o id: ${id}`);
      });
  }

  atualizar(campus: any): Promise<any> {
    return this.http.put(`${this.url}/${campus.id}`, campus)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar campus: ${campus.id}`);
    });
  }
}
