import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

class Membro {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
  conta: ContaDeAcesso;
  tipo: Tipo;
}

class Tipo {
  nome: string;
}

class ContaDeAcesso {
  email: string;
}

@Component({
  selector: 'app-cadastro-colegiado-pre',
  templateUrl: './cadastro-colegiado-pre.component.html',
  styleUrls: ['./cadastro-colegiado-pre.component.css']
})
export class CadastroColegiadoPreComponent implements OnInit {
  display = false;
  tiposMembros: SelectItem[];
  selectTipoMembro: string[];

  membros = [];
  membro = new Membro();

  constructor() {
    this.tiposMembros = [
      { label: 'Selecione', value: null },
      { label: '  Discente ', value: { id: 1, name: ' Discente' } },
      { label: '  Docente ', value: { id: 2, name: ' Docente' } },
      { label: '  Suplente Discente ', value: { id: 3, name: 'Suplente Discente' } },
      { label: ' Técnico Administrativo', value: { id: 4, name: 'Técnico Administrativo' } },
      { label: ' Docente Externo', value: { id: 5, nae: ' Docente Externo' } },
      { label: '  Suplente Docente Externo ', value: { id: 6, name: 'Suplente Docente Externo' } },
      { label: '  Suplente Técnico Administrativo ', value: { id: 7, name: 'Suplente Técnico Administrativo' } },

    ];
  }
  associar(form: NgForm) {
    this.membro = new Membro();
    this.membro.conta = new ContaDeAcesso();
    this.membro.tipo = new Tipo();
    this.membro.conta.email = form.value.email;
    this.membro.tipo.nome = form.value.tipo.value.name;
    this.membros.push(this.membro);
    console.log(this.membros);
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].conta.email === membro.conta.email) {
        this.membros.splice(i);
      }
    }
  }

  ngOnInit() {
  }
  showDialog() {
    this.display = !this.display;
  }
}
