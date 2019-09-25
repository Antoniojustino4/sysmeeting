import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cadastro-nde-pre',
  templateUrl: './cadastro-nde-pre.component.html',
  styleUrls: ['./cadastro-nde-pre.component.css']
})
export class CadastroNdePreComponent implements OnInit {
tiposMembros: SelectItem[];
  display = false;
  selectTipoMembro: string[];
  showDialog() {
      this.display = true;
  }
  constructor() {
    this.tiposMembros = [
      {label: '  Discente ', value : {id: 1, name: ' Discente'}},
      {label: '  Docente ', value : {id: 2, name: ' Docente'}},
      {label: '  Suplente Discente ', value : {id: 3, name: 'Suplente Discente'}},
      { label: ' Técnico Administrativo', value : {id: 4, name: 'técnico Administrativo'}},
      { label: ' Docente Externo', value : {id: 5, nae: ' Docente Externo'}},
      {label: '  Suplente Docente Externo ', value : {id: 6, name: 'Suplente Docente Externo'}},
      {label: '  Suplente Técnico Administrativo ', value : {id: 7, name: 'Suplente Técnico Administrativo'}},

    ];

  }

  ngOnInit() {
  }
}
