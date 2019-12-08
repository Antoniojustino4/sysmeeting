import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Promise<void> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'jx.k');

    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, {headers})
    .toPromise()
    .then(response =>
      console.log(response)
    ).catch(response =>
      console.log(response)
    );
  }
}
