import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  url = 'http://localhost:8080/reuniao';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

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
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(reuniao: any, id: number, orgao: string): Promise<any> {
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/orgoes/' + orgao + '/' + id + '/criarReuniao', reuniao, { headers})
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(reuniao: any): Promise<any> {
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
