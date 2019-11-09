import { MembroService } from 'src/app/core/service/membro.service';
import { CadastroColegiadoAdmComponent } from './../cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import { ColegiadoService } from './../../core/service/colegiado.service';
import { Membro, ContaDeAcesso, Tipo } from './../../core/service/membro.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-colegiado-pre',
  templateUrl: './cadastro-colegiado-pre.component.html',
  styleUrls: ['./cadastro-colegiado-pre.component.css']
})
export class CadastroColegiadoPreComponent implements OnInit {

  display = false;
  tiposMembros: SelectItem[];
  selectTipoMembro: string[];
  id = 2;

  membros = [];
  membro = new Membro();

  constructor(private route: ActivatedRoute, private membroService: MembroService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // this.carregarDados();
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
    this.membro.contaAcesso = new ContaDeAcesso();
    this.membro.contaAcesso.email = form.value.email;
    this.membro.contaAcesso.senha = form.value.senha;
    this.membro.tipo = form.value.tipo.value.name;
    this.membros.push(this.membro);
    this.membroService.adicionar(this.membro);
    form.reset();
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].conta.email === membro.contaAcesso.email) {
        this.membros.splice(i, 1);
      }
    }
  }

  showDialog() {
    this.display = !this.display;
  }
}
