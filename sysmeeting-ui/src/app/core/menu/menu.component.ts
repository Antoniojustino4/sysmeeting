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
  menu: MenuItem[];
  @Input() breadcrumb = [];

  email: string;
  senha: string;

  constructor(
    private mensagem: MensagemService,
    private auth: AuthService,
    private router: Router
  ) { }


  login() {
    this.auth.login(this.email, this.senha)
      .then(() => {
        this.showDialog();
        this.router.navigate(['/cadastrar']);
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  refresh() {
    this.auth.obterNovoAccessToken()
      .then(() => {
        this.showDialogPerfil();
        this.router.navigate(['/']);
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  ngOnInit() {
    this.menu = [
      {
        label: 'Campus e Curso',
        items: [
          {
            label: 'Listagem Campus e Curso',
            url: '/'
          },
          {
            label: 'Criar Campus e Curso',
            url: '/cadastrar'
          }
        ]
      },
      {
        label: 'Ata',
        items: [
          {
            label: 'Edição de Ata',
            url: 'atas/'
          }
        ]
      },
      {
        label: 'Orgão',
        items: [
          {
            label: 'Composição Colegiado',
            url: 'orgaos/colegiado'
          },
          {
            label: 'Criar Colegiado ADM',
            url: 'orgaos/colegiado-adm-novo'
          },
          {
            label: 'Criar Colegiado Presidente',
            url: 'orgaos/colegiado-pre-novo'
          },
          {
            label: 'Composição Anterior do Colegiado',
            url: 'orgaos/colegiado-anterior'
          },
          {
            label: 'Composição NDE',
            url: 'orgaos/nde'
          },
          {
            label: 'Criar NDE ADM',
            url: 'orgaos/nde-adm-novo'
          },
          {
            label: 'Criar NDE Presidente',
            url: 'orgaos/nde-pre-novo'
          },
          {
            label: 'Composição Anterior do NDE',
            url: 'orgaos/nde-anterior'
          },
        ]
      },
      {
        label: 'Reunião',
        items: [
          {
            label: 'Gerenciar Item de Pauta',
            url: 'reunioes/gerenciar-item'
          },
          {
            label: 'Criar Reunião',
            url: 'reunioes/cadastro-reuniao'
          },
          {
            label: 'Calendário de Reunião',
            url: 'reunioes/calendario-reuniao-pre'
          },
          {
            label: 'Calendário de Reunião de membro',
            url: 'reunioes/calendario-reuniao-membro'
          }
        ]
      },

    ];
  }

  showDialog() {
    return this.exibindoLogin = !this.exibindoLogin;
  }
  showDialogPerfil() {
    return this.exibindoPerfil = !this.exibindoPerfil;
  }
}
