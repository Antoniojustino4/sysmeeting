import { CampusFilter } from './../../campus-curso/listagem-curso/listagem-curso.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: CampusFilter): Promise<any> {
    let a = '';

    a = 'page=' + filtro.pagina + '&size=' + filtro.itensPorPagina;

    if (filtro.nome) {
      a += '&nome=' + filtro.nome;
    }
    if (filtro.formacao) {
      a += '&formacao=' + filtro.formacao;
    }

    const params = new HttpParams({ fromString: a });
    const headers = new HttpHeaders();

    return this.http.get(`${this.url}`, { headers, params })
      .toPromise()
      .then(response => response.valueOf()
      )
      .catch(erro => {
        return erro.error.message;
      });
  }


  consultar(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return erro.error.message;
      });
  }

}
