import { CampusFilter } from './../filter';
import { AuthService } from './../../seguranca/auth.service';
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
    let parametros = '';

    parametros = 'page=' + filtro.pagina + '&size=' + filtro.itensPorPagina;

    if (filtro.nome) {
      parametros += '&nome=' + filtro.nome;
    }
    if (filtro.formacao) {
      parametros += '&formacao=' + filtro.formacao;
    }

    const params = new HttpParams({ fromString: parametros });

    return this.http.get(`${this.url}`, { params })
      .toPromise()
      .then(response => response.valueOf()
      );
  }


  consultar(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.valueOf());
  }

}
