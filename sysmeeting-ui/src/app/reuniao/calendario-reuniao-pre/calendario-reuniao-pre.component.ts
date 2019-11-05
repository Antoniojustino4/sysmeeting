import { MenuItem, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ReuniaoService, Reuniao } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-reuniao-pre',
  templateUrl: './calendario-reuniao-pre.component.html',
  styleUrls: ['./calendario-reuniao-pre.component.css']
})
export class CalendarioReuniaoPreComponent implements OnInit {
  private itens: MenuItem[];
  reuniao= new Reuniao();
  reunioes = [];
  cols: any[];
  private meses: SelectItem[];
  constructor(private reuniaoService: ReuniaoService, private router: Router) {
      this.cols = [
        { field: 'reuniao.data', header: 'Data' },
        { field: 'reuniao.tipo', header: 'Tipo de Reunião' },
        { field: 'reuniao.estado', header: 'Estado' }

      ];
      this.meses=[
        { label: 'Janeiro', value: { id: 1, name: 'Janeiro' } },
        { label: 'Fevereiro', value: { id: 2, name: 'Fevereiro' } },
        { label: 'Março', value: { id: 3, name: 'Marco' } },
        { label: 'Abril', value: { id: 4, name: 'Abril' } },
        { label: 'Maio', value: { id: 5, name: 'Maio' } },
        { label: 'Junho', value: { id: 6, name: 'Junho' } },
        { label: 'Julho', value: { id: 7, name: 'Julho' } },
        { label: 'Agosto', value: { id: 8, name: 'Agosto' } },
        { label: 'Setembro', value: { id: 9, name: 'Setembro' } },
        { label: 'Outubro', value: { id: 10, name: 'Outubro' } },
        { label: 'Novembro', value: { id: 11, name: 'Novembro' } },
        { label: 'Dezembro', value: { id: 12, name: 'Dezembro' } }
      ]
  }

  ngOnInit() {
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Orgão', url: '' },
     { label: 'Agenda de Reuniões', url: '' }
    ];
  }

}
