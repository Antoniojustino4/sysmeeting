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
  orgao;

  constructor(private ndeService: NdeService) {

  }

  consultarNDE(): any {
    this.ndeService.consultarPeloId(24)
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
      { label: 'Composições Anteriores'}
    ];
  }

}
