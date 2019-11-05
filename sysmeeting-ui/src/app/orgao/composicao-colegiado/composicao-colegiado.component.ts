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
  orgao;


  constructor(private colegiadoService: ColegiadoService) {

  }

  consultarNDE(): any {
    this.colegiadoService.consultarPeloId(2)
      .then(dados => {
        this.orgao = dados;
        console.log(dados);
      })
      .catch(erro => {
        alert(erro);
      });
  }

  ngOnInit() {
    this.consultarNDE();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores' }
    ];
  }

}
