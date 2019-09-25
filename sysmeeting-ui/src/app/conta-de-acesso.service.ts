import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContaDeAcessoService {

  constructor(private http: HttpClient) {}

  consultar() {
    // this.http.post('localhost:8080/oauth/token', 'client:angular, username: admin@admin.com, password: admin, grant_type:password')
    //   .toPromise().then(response => {
    //     console.log();
    //   });
    // this.http.get('localhost:8080/usuarios').toPromise().then(response => {
    //   console.log();
    //  });
  }
}
