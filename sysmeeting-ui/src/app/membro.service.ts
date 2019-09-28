import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor(private http: HttpClient) {}

  consultar() {
    this.http.get('http://localhost:8080/membros')
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
