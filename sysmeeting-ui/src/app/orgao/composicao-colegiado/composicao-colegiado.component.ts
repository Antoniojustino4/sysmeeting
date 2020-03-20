import { Orgao } from './../../core/model';
import { AuthService } from './../../seguranca/auth.service';
import { MensagemService } from './../../core/mensagem.service';
import { ActivatedRoute, RouterModule, RouterLink, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { ColegiadoService } from '../../core/service/colegiado.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composicao-colegiado',
  templateUrl: './composicao-colegiado.component.html',
  styleUrls: ['./composicao-colegiado.component.css']
})
export class ComposicaoColegiadoComponent implements OnInit {

  items: MenuItem[];
  orgao = new Orgao();
  id: any;

  constructor(
    private colegiadoService: ColegiadoService,
    private router: Router,
    private mensagem: MensagemService,
    private auth: AuthService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.consultarColegiado();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores', routerLink: ['/orgaos/colegiado-anterior', this.orgao.curso.id] },
      { label: 'Criar Colegiado', routerLink: ['/orgaos/colegiado-adm-novo', this.orgao.curso.id] }
    ];
  }

  consultarColegiado(): any {
    this.colegiadoService.consultarPeloId(this.id)
      .then(dados => {
        console.log(dados);
        this.orgao.curso.id = dados.curso.id;
        this.orgao = dados;
      }).catch(erro =>
        this.mensagem.error(erro)
      );
  }

}
