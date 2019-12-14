import { AuthService } from './../../seguranca/auth.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  url = 'http://localhost:8080/reuniao';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    this.auth.fazerRequisicao();
    const params = new HttpParams();
    const headers = new HttpHeaders();

    // if (!filtro.descricao) {
    //   params.set('descricao', filtro.descricao);
    // }

    return this.http.get(`${this.url}`, { headers, params })
      .toPromise()
      .then(response => {
        const reuniao = response.valueOf();
        const resultado = {
          // campus, total: campus.totalElements;
        };
        return resultado;
      });
  }

  consultarPeloId(id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(reuniao: any, id: number, orgao: string): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/orgoes/' + orgao + '/' + id + '/criarReuniao', reuniao, { headers})
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(reuniao: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${reuniao.id}`, reuniao, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
  mostrarPauta(reuniao: any): Promise<any> {
    return this.http.put(`${this.url}/${reuniao.id}`, reuniao)
      .toPromise()
      .then(response => response.valueOf());
}
}
