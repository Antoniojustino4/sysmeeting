import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDePautaService {

  url = 'http://localhost:8080/itensDePauta';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    let a = '';

    a = 'page=' + filtro.pagina + '&size=' + filtro.itensPorPagina;

    if (filtro.assunto) {
      a += '&assunto=' + filtro.assunto;
    }
    if (filtro.estado) {
      a += '&estado=' + filtro.estado;
    }
    const params = new HttpParams({ fromString: a });

    return this.http.get(`${this.url}`, { params })
      .toPromise()
      .then(response => response
      );
  }

  adicionar(item: any): Promise<any> {
    return this.http.post(`${this.url}`, item)
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  // esse método é o que está funcionando pra edição de item
  atualiza(item: any): Promise<any> {
    return this.http.get(`${this.url}/${item}`, item)
      .toPromise()
      .then(response => response.valueOf());

  }

  atualizar(item: any): Promise<any> {
    return this.http.put(`${this.url}/${item.id}`, item)
      .toPromise()
      .then(response => response.valueOf());
  }
}
