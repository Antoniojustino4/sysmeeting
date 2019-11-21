import { Orgao } from './../../core/service/membro.service';
import { ActivatedRoute } from '@angular/router';
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


  constructor(
    private colegiadoService: ColegiadoService,
    private toasty: ToastyService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.orgao.id = this.route.snapshot.params.id;
    this.consultarColegiado();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores' }
    ];
  }
  consultarColegiado(): any {
    this.colegiadoService.consultarPeloId(this.orgao.id)
      .then(dados => {
        this.orgao = dados;
      })
      .catch(erro => {
        this.toasty.error(erro);
      });
  }


}
