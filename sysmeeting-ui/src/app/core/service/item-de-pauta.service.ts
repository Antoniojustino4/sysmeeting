import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDePautaService {

  url = 'http://localhost:8080/itensDePauta';

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return erro.error.message;
      });
  }

  pesquisar(filtro: any): Promise<any> {
    const params = new HttpParams();
    const headers = new HttpHeaders();

    // if (!filtro.descricao) {
    //   params.set('descricao', filtro.descricao);
    // }

    return this.http.get(`${this.url}`, {headers, params})
      .toPromise()
      .then(response => {
        const item = response.valueOf();
        const resultado = {
          // campus, total: campus.totalElements;
        };
        return resultado;
      })
      .catch(erro => {
        return erro.error.message;
      });
  }

  adicionar(item: any): Promise<any> {
    return this.http.post(`${this.url}`, item)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return erro.error.message;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return erro.error.message;
      });
  }

  // esse método é o que está funcionando pra edição de item
  atualiza(item: any): Promise<any> {
    return this.http.get(`${this.url}/${item}`, item)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return erro.error.message;
    });

}

  atualizar(item: any): Promise<any> {
    return this.http.put(`${this.url}/${item.id}`, item)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return erro.error.message;
    });
  }
}
