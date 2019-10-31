import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-composicao',
  templateUrl: './composicao.component.html',
  styleUrls: ['./composicao.component.css']
})
export class ComposicaoComponent implements OnInit {

  @Input() orgao: any;
  membros: any[];
  @Input() tipo: string;

  constructor() {
  }

  ngOnInit() {

  }

}
