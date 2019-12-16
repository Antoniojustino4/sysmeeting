import { MensagemService } from './../mensagem.service';
import { AuthService } from './../../seguranca/auth.service';
import { MembroService } from '../service/membro.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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
    private auth: AuthService,
    private router: Router,
    private mensagem: MensagemService
  ) { }


  login() {
    this.auth.login(this.email, this.senha)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

}
