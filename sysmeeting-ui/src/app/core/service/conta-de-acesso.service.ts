import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContaDeAcessoService {

  constructor(private http: HttpClient) {}

  consultar() {
    // return this.http.get('http://localhost:8080/cursos')
    //   .toPromise()
    //   .then(response => response.valueOf())
    //   .catch(erro => {
    //     alert(erro.error.message);
    //   });
  }
}
