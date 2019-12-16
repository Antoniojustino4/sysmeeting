import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRenokeUrl = 'http://localhost:8080/token/revoke';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  logout() {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(this.tokensRenokeUrl, { headers, withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });

  }




}
