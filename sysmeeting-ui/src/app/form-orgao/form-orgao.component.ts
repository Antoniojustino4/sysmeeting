import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import {SelectItem} from 'primeng/api';
class Curso {
  instituicao: string;
  campus: string;
  curso: string;
  modalidade: string;
  turno: string;
  formacao: string;
}
@Component({
  selector: 'app-form-orgao',
  templateUrl: './form-orgao.component.html',
  styleUrls: ['./form-orgao.component.css'],

})
export class FormOrgaoComponent implements OnInit {
  private itens: MenuItem[];
  modalidades: SelectItem[];
  selectModalidade: string[];
  display = false;

    showDialog() {
        this.display = true;
    }

  constructor() {
    this.modalidades = [
{label: '  EAD ', value : {id: 1, name: ' EAD'}}, { label: ' Presencial', value : {id: 2, name: 'Presencial'}},
{ label: '  Semi-Presencial', value : {id: 3, name: ' Semi-presencial'}}

    ];


  }
salvar() {

}
  ngOnInit() {

      this.itens = [{ label: 'Página Principal', url: 'http://localhost:4200/'

      },
          {label: 'Cadastro de Campus e Cursos', url: ''}



      ];

  }

}
