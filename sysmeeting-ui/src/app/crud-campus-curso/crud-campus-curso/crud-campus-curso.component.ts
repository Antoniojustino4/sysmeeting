import { CursoService } from './../../service/curso.service';
import { NgForm, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';

class Curso {
  instituicao: string;
  campus: string;
  curso: string;
  modalidade: string;
  turno: string;
  formacao: string;
}

@Component({
  selector: 'app-crud-campus-curso',
  templateUrl: './crud-campus-curso.component.html',
  styleUrls: ['./crud-campus-curso.component.css']
})
export class CrudCampusCursoComponent implements OnInit {

  private itens: MenuItem[];
  modalidades: SelectItem[];
  selectModalidade: string[];
  display = false;
  cursos = [];

  curso = new Curso();

  constructor(private cursoService: CursoService) {
    this.modalidades = [
      { label: '  EAD ', value: { id: 1, name: ' EAD' } }, { label: ' PRESENCIAL', value: { id: 2, name: 'Presencial' } },
      { label: '  Semi-Presencial', value: { id: 3, name: ' Semi-presencial' } }
    ];
  }

  ngOnInit() {
    this.consultar();
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Campus e Cursos', url: '' }
    ];
  }

  adicionar(form: NgForm) {
    this.cursoService.adicionar({ nome: form.value.nome, turno: form.value.turno,
      formacao: form.value.formacao})
      .then(dado => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }
  consultar() {
    this.cursoService.consultar()
      .then(dados => {
        this.cursos = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluir(id: number) {
    this.cursoService.excluir(id)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizar(curso: any) {
    curso.nome = curso.nome + '1';
    this.cursoService.atualizar(curso)
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

}
