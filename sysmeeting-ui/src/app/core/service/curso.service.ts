import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(private http: HttpClient) {}



  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/curso')
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta curso`);
      });
  }

}
