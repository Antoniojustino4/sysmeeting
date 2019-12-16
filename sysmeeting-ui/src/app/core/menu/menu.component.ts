import { LogoutService } from './../../seguranca/logout.service';
import { MensagemService } from './../mensagem.service';
import { AuthService } from './../../seguranca/auth.service';
import { CursoService } from './../service/curso.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  exibindoLogin = false;
  exibindoPerfil = false;
  items: MenuItem[];
  url = 'http://localhost:4200/';
  @Input() breadcrumb = [];

  constructor(
    private mensagem: MensagemService,
    private auth: AuthService,
    private router: Router,
    private logoutService: LogoutService
  ) { }


  ngOnInit() {
  }

  showDialogPerfil() {
    return this.exibindoPerfil = !this.exibindoPerfil;
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/']);
      }).catch(erro => this.mensagem.error(erro));
  }
}
