import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
interface Grupo {
  nome: string;
}
@Component({
  selector: 'app-composicoes-anteriores',
  templateUrl: './composicoes-anteriores.component.html',
  styleUrls: ['./composicoes-anteriores.component.css']
})
export class ComposicoesAnterioresComponent {

  grupo: SelectItem[];
  selectedGrupo: Grupo[];

  constructor() {
      this.grupo = [
        {label: '2019', value: {id: 1, name: '2018'}},
        {label: '2018', value: {id: 2, name: '2019'}},
        ];
  }

}
