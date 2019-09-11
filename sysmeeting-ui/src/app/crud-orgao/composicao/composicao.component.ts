import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';

class Orgao {
  tipo: string;
  portaria: string;
  mandato: string;
}

@Component({
  selector: 'app-composicao',
  templateUrl: './composicao.component.html',
  styleUrls: ['./composicao.component.css']
})
export class ComposicaoComponent implements OnInit {

  items: MenuItem[];
  orgao = new Orgao();

  constructor() {
    this.orgao.tipo = 'Colegiado';
    this.orgao.portaria = '001/2019';
    this.orgao.mandato = '01/02/2019 a 01/02/2021';
  }

  ngOnInit() {
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores', url: 'http://angular.io' }
    ];
  }

}
