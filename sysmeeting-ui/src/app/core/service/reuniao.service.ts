import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  url = 'http://localhost:8080/reuniao';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  pesquisar(filtro: any): Promise<any> {
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
      })
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  consultarPeloId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  adicionar(reuniao: any): Promise<any> {
    return this.http.post(`${this.url}`, reuniao)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        alert(erro.error.message);
      });
  }

  atualizar(reuniao: any): Promise<any> {
    return this.http.put(`${this.url}/${reuniao.id}`, reuniao)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        alert(erro.error.message);
      });
  }
}
