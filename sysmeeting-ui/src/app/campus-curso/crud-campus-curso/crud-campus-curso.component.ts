import { CampusService, Campus, Curso } from '../../core/service/campus.service';
import { NgForm, Form } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

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
  cols: any[];

  constructor(private campusService: CampusService, private router: Router) {
    this.cols = [
      { field: 'campus.nome', header: 'Instituição' },
      { field: 'campus.cidade', header: 'Campus' },
      { field: 'nome', header: 'Curso' },
      { field: 'modalidade', header: 'Modalidade' },
      { field: 'turno', header: 'Turno' },
      { field: 'formacao', header: 'Formação' }
    ];
    this.modalidades = [
      { label: 'Selecione', value: null },
      { label: '  EAD ', value: { id: 1, name: 'ADISTANCIA' } },
      { label: ' Presencial', value: { id: 2, name: 'PRESENCIAL' } },
      { label: '  Semi-Presencial', value: { id: 3, name: 'SEMIPRESENCIAL' } }
    ];
    this.turnos = [
      { label: 'Selecione', value: null },
      { label: '  Matutino ', value: { id: 1, name: 'MATUTINO' } },
      { label: ' Vespertino', value: { id: 2, name: 'VESPERTINO' } },
      { label: '  Nortuno', value: { id: 3, name: 'NORTUNO' } },
      { label: '  Integral', value: { id: 3, name: 'INTEGRAL' } },
      { label: '  Diurno', value: { id: 3, name: 'DIURNO' } }
    ];
    this.formacoes = [
      { label: 'Selecione', value: null },
      { label: '  Tecnologo ', value: { id: 1, name: 'TECNOLOGO' } },
      { label: ' Bacharelado', value: { id: 2, name: 'BACHARELADO' } },
      { label: '  Licenciatura', value: { id: 3, name: 'LICENCIATURA' } }
    ];
  }

  ngOnInit() { }

  adicionar(form: NgForm) {
    this.campus.cidade = form.value.campus;
    this.campus.nome = form.value.nome;

    this.campusService.adicionar({ nome: form.value.nome, cidade: form.value.campus, cursos: this.cursos })
      .then(dado => {

      })
      .catch(erro => {
        alert(erro);
      });
  }

  adicionarCurso(form: NgForm, formCampus: NgForm) {
    this.curso.nome = form.value.nome;
    this.curso.turno = form.value.turno.value.name;
    this.curso.formacao = form.value.formacao.value.name;
    this.curso.modalidade = form.value.modalidade.value.name;

    this.curso.campus = new Campus();
    this.curso.campus.nome = formCampus.value.nome;
    this.curso.campus.cidade = formCampus.value.campus;

    this.cursos.push(this.curso);
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

  excluirCurso(curso: Curso) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i] === curso) {
        this.cursos.splice(i, 1);
      }
    }
    this.consultar();
  }

  showDialog(a: boolean) {
    if (a !== null && a === true) {
      this.display = !this.display;
    }
  }

}
