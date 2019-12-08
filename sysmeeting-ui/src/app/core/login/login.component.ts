import { AuthService } from './../../seguranca/auth.service';
import { MembroService } from '../service/membro.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  exibindoLogin: false;
  email: string;
  senha: string;

  constructor(
    private auth: AuthService
  ) {}


  aaaa() {
    console.log('a');
    this.auth.login(this.email, this.senha);
  }

}
