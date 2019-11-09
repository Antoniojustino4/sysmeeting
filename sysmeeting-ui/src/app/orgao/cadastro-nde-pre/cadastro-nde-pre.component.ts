import { NdeService } from 'src/app/core/service/nde.service';
import { ActivatedRoute } from '@angular/router';
import { Membro, ContaDeAcesso, Tipo, MembroService, Orgao } from './../../core/service/membro.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem, LazyLoadEvent } from 'primeng/api';


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
  conta = new ContaDeAcesso();
  id = '1';

  constructor(private route: ActivatedRoute, private membroService: MembroService) { }

  ngOnInit() {
    this.tiposMembros = [
      { label: 'Selecione', value: null },
      { label: '  Discente ', value: {name: 'DISCENTE' } },
      { label: '  Docente ', value: { id: 2, name: ' Docente' } },
      { label: '  Suplente Discente ', value: { id: 3, name: 'Suplente Discente' } },
      { label: ' Técnico Administrativo', value: { id: 4, name: 'técnico Administrativo' } },
      { label: ' Docente Externo', value: { id: 5, nae: ' Docente Externo' } },
      { label: '  Suplente Docente Externo ', value: { id: 6, name: 'Suplente Docente Externo' } },
      { label: '  Suplente Técnico Administrativo ', value: { id: 7, name: 'Suplente Técnico Administrativo' } },

    ];

  }

  associar(form: NgForm) {
    this.membro = new Membro();
    this.membro.contaAcesso = new ContaDeAcesso();
    this.membro.contaAcesso.email = form.value.email;
    this.membro.tipo = form.value.tipo.value.name;
    const orgao = new Orgao();
    orgao.id = this.id;
    this.membro.orgoes.push(orgao);

    this.membros.push(this.membro);
    this.membroService.adicionar(this.membro);
    form.reset();
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].contaAcesso.email === membro.contaAcesso.email) {
        this.membros.splice(i, 1);
      }
    }
  }


  showDialog() {
    this.display = !this.display;
  }
}
