import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

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
  constructor() { }

  ngOnInit() {

      this.itens = [{ label: 'Página Principal', url: 'http://localhost:4200/'

      },
          {label: 'Cadastro de Campus e Cursos', url: ''}



      ];

  }

}
