import { ActivatedRoute } from '@angular/router';
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
  breadcrumb = [];

  constructor() {
  }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial' , url: '/', icon: 'pi pi-home'},
      { label: 'Órgão', url: '/orgoes' },
      { label: 'Composição', url: '/orgoes/composicao' }
    ];
  }

}
