import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-ata',
  templateUrl: './edicao-ata.component.html',
  styleUrls: ['./edicao-ata.component.css']
})
export class EdicaoAtaComponent implements OnInit {

  essamerda: MenuItem[];
  items: MenuItem[];
  cols: any[];
  cursos = [];

  constructor() { }

  ngOnInit() {
    this.essamerda = [
      { label: '1' },
      { label: '2' }
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.items = [
      { label: 'Registro', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Atividades', icon: 'fa fa-fw fa-calendar' }
    ];
  }

}
