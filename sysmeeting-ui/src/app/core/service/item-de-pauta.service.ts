import { AuthService } from './../../seguranca/auth.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDePautaService {

  url = 'http://localhost:8080/itensDePauta';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  pesquisar(filtro: any): Promise<any> {
    this.auth.fazerRequisicao();
    let a = '';

    a = 'page=' + filtro.pagina + '&size=' + filtro.itensPorPagina;

    if (filtro.assunto) {
      a += '&assunto=' + filtro.assunto;
    }
    if (filtro.estado) {
      a += '&estado=' + filtro.estado;
    }
    const params = new HttpParams({ fromString: a });
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers, params })
      .toPromise()
      .then(response => response
      );
  }

  adicionar(item: any, id: number, orgao: string): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/orgoes/' + orgao + '/' + id + '/criarItemDePauta', item, { headers})
      .toPromise();
  }

  sugerir(item: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/itensDePauta/sugeridos', item, { headers})
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  // esse método é o que está funcionando pra edição de item
  atualiza(item: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${item}`, item, { headers })
      .toPromise()
      .then(response => response.valueOf());

  }

  atualizar(item: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${item.id}`, item, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
