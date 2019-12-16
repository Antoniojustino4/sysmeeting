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
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    let params = new HttpParams();

    console.log(filtro);


    if (filtro.ano.value) {
      params = params.set('ano', filtro.ano.value.name);
    }
    if (filtro.mes.value) {
      params = params.set('mes', filtro.mes.value.name);
    }

    return this.http.get(`${this.url}`, { params })
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
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(reuniao: any, id: number, orgao: string): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/orgoes/' + orgao + '/' + id + '/criarReuniao', reuniao, { headers })
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  atualizar(reuniao: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${reuniao.id}`, reuniao, { headers })
      .toPromise()
      .then(response => response.valueOf());
  }
}
