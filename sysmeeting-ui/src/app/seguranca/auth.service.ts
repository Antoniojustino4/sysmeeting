import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Promise<void> {
    const headers = new HttpHeaders();
    const body = `username=${email}&password=${senha}&grant_type=password`;

    this.http.post(this.oauthTokenUrl, body, {headers});
  }
}
