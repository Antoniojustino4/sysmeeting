import { Orgao } from './../../core/model';
import { AuthService } from './../../seguranca/auth.service';
import { MensagemService } from './../../core/mensagem.service';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { NdeService } from '../../core/service/nde.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-composicao-nde',
  templateUrl: './composicao-nde.component.html',
  styleUrls: ['./composicao-nde.component.css']
})
export class ComposicaoNdeComponent implements OnInit {

  items: MenuItem[];
  orgao = new Orgao();

  constructor(
    private ndeService: NdeService,
    private mensagem: MensagemService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.orgao.id = this.route.snapshot.params.id;
    this.consultarNDE();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores', routerLink: ['/orgaos/nde-anterior', this.orgao.curso.id] },
      { label: 'Criar NDE', routerLink: ['/orgaos/nde-adm-novo', this.orgao.curso.id] }
    ];
  }

  consultarNDE(): any {
    this.ndeService.consultarPeloId(this.orgao.id)
      .then(dados => {
        this.orgao = dados;
      })
      .catch(erro => {
        this.mensagem.error(erro);
      });
  }



}
