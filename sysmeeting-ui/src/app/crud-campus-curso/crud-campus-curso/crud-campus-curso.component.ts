import { CampusService } from '../../service/campus.service';
import { NgForm, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';

class Campus {
  nome: string;
  cidade: string;
  cursos: Curso[];
}

class Curso {
  nome: string;
  turno: string;
  modalidade: string;
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
  turnos: SelectItem[];
  formacoes: SelectItem[];
  selectModalidade: string[];
  display = false;
  listCampus = [];

  cursos = [];
  campus = new Campus();
  curso = new Curso();

  constructor(private campusService: CampusService) {
    this.modalidades = [
      {label: 'Selecione', value: null},
      { label: '  EAD ', value: { id: 1, name: 'ADISTANCIA' } },
      { label: ' Presencial', value: { id: 2, name: 'PRESENCIAL' } },
      { label: '  Semi-Presencial', value: { id: 3, name: 'SEMIPRESENCIAL' } }
    ];
    this.turnos = [
      {label: 'Selecione', value: null},
      { label: '  Matutino ', value: { id: 1, name: 'MATUTINO' } },
      { label: ' Vespertino', value: { id: 2, name: 'VESPERTINO' } },
      { label: '  Nortuno', value: { id: 3, name: 'NORTUNO' } },
      { label: '  Integral', value: { id: 3, name: 'INTEGRAL' } },
      { label: '  Diurno', value: { id: 3, name: 'DIURNO' } }
    ];
    this.formacoes = [
      {label: 'Selecione', value: null},
      { label: '  EAD ', value: { id: 1, name: 'ADISTANCIA' } },
      { label: ' Presencial', value: { id: 2, name: 'PRESENCIAL' } },
      { label: '  Semi-Presencial', value: { id: 3, name: 'SEMIPRESENCIAL' } }
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
    this.campus.cidade = form.value.campus;
    this.campus.nome = form.value.nome;
    console.log(this.campus.cursos);

    this.campusService.adicionar(this.campus)
      .then(dado => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  adicionarCurso(form: NgForm) {
    this.curso.nome = form.value.nome;
    this.curso.turno = form.value.turno;
    this.curso.formacao = form.value.formacao;
    this.curso.modalidade = form.value.modalidade[0].value.name;
    this.cursos.push(this.curso);
    this.campus.cursos = this.cursos;

    console.log(form.value.modalidade[0].value.name);
  }

  consultar() {
    this.campusService.consultar()
      .then(dados => {
        this.listCampus = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluir(id: number) {
    this.campusService.excluir(id)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizar(campus: any) {
    campus.nome = campus.nome + '1';
    this.campusService.atualizar(campus)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  showDialog() {
    this.display = !this.display;
  }

}
