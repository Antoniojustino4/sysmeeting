import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders();

    if (!filtro.nome) {
      params.set('nome', filtro.nome);
    }
    if (!filtro.formacao) {
      params.set('nome', filtro.formacao);
    }

    return this.http.get(`${this.url}`, { headers, params })
      .toPromise()
      .then(response => {
        const curso = response.valueOf();
        const resultado = {
        };
        return resultado;
      })
      .catch(erro => {
        return Promise.reject(`Erro ao consulta curso`);
      });
  }


  consultar(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta curso`);
      });
  }

}
