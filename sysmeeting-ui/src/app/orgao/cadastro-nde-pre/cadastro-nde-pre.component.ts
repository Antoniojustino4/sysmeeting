import { Membro, ContaDeAcesso, Tipo } from './../../core/service/membro.service';
import { NgForm } from '@angular/forms';
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

  membro = new Membro();
  membros = [];



  constructor() {
    this.tiposMembros = [
      { label: 'Selecione', value: null },
      {label: '  Discente ', value : {id: 1, name: ' Discente'}},
      {label: '  Docente ', value : {id: 2, name: ' Docente'}},
      {label: '  Suplente Discente ', value : {id: 3, name: 'Suplente Discente'}},
      { label: ' Técnico Administrativo', value : {id: 4, name: 'técnico Administrativo'}},
      { label: ' Docente Externo', value : {id: 5, nae: ' Docente Externo'}},
      {label: '  Suplente Docente Externo ', value : {id: 6, name: 'Suplente Docente Externo'}},
      {label: '  Suplente Técnico Administrativo ', value : {id: 7, name: 'Suplente Técnico Administrativo'}},

    ];

  }

  associar(form: NgForm) {
    this.membro = new Membro();
    this.membro.conta = new ContaDeAcesso();
    this.membro.tipo = new Tipo();
    this.membro.conta.email = form.value.email;
    this.membro.tipo.nome = form.value.tipo.value.name;
    this.membros.push(this.membro);
    form.reset();
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].conta.email === membro.conta.email) {
        this.membros.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = !this.display;
}
}
