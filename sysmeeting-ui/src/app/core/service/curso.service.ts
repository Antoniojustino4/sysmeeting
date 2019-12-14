import { AuthService } from './../../seguranca/auth.service';
import { CampusFilter } from './../../campus-curso/listagem-curso/listagem-curso.component';
import { HttpClient, HttpParams, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/cursos';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  pesquisar(filtro: CampusFilter): Promise<any> {
    this.auth.fazerRequisicao();
    let parametros = '';

    parametros = 'page=' + filtro.pagina + '&size=' + filtro.itensPorPagina;

    if (filtro.nome) {
      parametros += '&nome=' + filtro.nome;
    }
    if (filtro.formacao) {
      parametros += '&formacao=' + filtro.formacao;
    }

    const params = new HttpParams({ fromString: parametros });
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers, params })
      .toPromise()
      .then(response => response.valueOf()
      );
  }


  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.url, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

}
