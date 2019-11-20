import { Orgao } from './../../core/service/membro.service';
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
    private toasty: ToastyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orgao.id = this.route.snapshot.params.id;
    this.consultarNDE();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores' }
    ];
  }

  consultarNDE(): any {
    this.ndeService.consultarPeloId(this.orgao.id)
      .then(dados => {
        this.orgao = dados;
        console.log(dados);
      })
      .catch(erro => {
        this.toasty.error(erro);
      });
  }



}
