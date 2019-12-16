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
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();

    // if (!filtro.descricao) {
    //   params.set('descricao', filtro.descricao);
    // }

    return this.http.get(`${this.url}`, {params })
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
    return this.http.post('http://localhost:8080/orgoes/' + orgao + '/' + id + '/criarReuniao', reuniao)
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(reuniao: any): Promise<any> {
    return this.http.put(`${this.url}/${reuniao.id}`, reuniao)
      .toPromise()
      .then(response => response.valueOf());
  }
  mostrarPauta(reuniao: any): Promise<any> {
    return this.http.put(`${this.url}/${reuniao.id}`, reuniao)
      .toPromise()
      .then(response => response.valueOf());
}
}
