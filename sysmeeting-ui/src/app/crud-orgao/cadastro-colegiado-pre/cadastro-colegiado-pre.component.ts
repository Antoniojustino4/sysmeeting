import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cadastro-colegiado-pre',
  templateUrl: './cadastro-colegiado-pre.component.html',
  styleUrls: ['./cadastro-colegiado-pre.component.css']
})
export class CadastroColegiadoPreComponent implements OnInit {
  display = false;
  tiposMembros: SelectItem[];
  selectTipoMembro: string[];
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
  showDialog() {
    this.display = true;
}
}
