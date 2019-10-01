import { NgForm, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { MembroService } from '../membro.service';

class Curso {
  instituicao: string;
  campus: string;
  curso: string;
  modalidade: string;
  turno: string;
  formacao: string;
}


class Membro {
  nome: string;
  email: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
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
  membros = [];

  membro = new Membro();

  adicionar(form: NgForm) {
    this.membroService.adicionar({ nome: form.value.nome})
      .then(dado => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }
  consultar() {
    this.membroService.consultar()
      .then(dados => {
        this.membros = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluir(id: number) {
    this.membroService.excluir(id)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizar(membro: any) {
    membro.nome = membro.nome + '1';
    this.membroService.atualizar(membro)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  showDialog() {
    this.display = true;
  }

  constructor(private membroService: MembroService) {
    this.modalidades = [
      { label: '  EAD ', value: { id: 1, name: ' EAD' } }, { label: ' Presencial', value: { id: 2, name: 'Presencial' } },
      { label: '  Semi-Presencial', value: { id: 3, name: ' Semi-presencial' } }
    ];
  }

  salvar() {

  }

  ngOnInit() {
    this.consultar();
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Campus e Cursos', url: '' }
    ];
  }
}
