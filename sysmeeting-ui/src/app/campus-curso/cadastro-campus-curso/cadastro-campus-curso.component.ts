import { ToastyModule, ToastyService } from 'ng2-toasty';
import { CampusService, Campus, Curso } from '../../core/service/campus.service';
import { Component, OnInit, Input } from '@angular/core';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-campus-curso',
  templateUrl: './cadastro-campus-curso.component.html',
  styleUrls: ['./cadastro-campus-curso.component.css']
})
export class CadastroCampusCursoComponent implements OnInit {


  modalidades: SelectItem[];
  turnos: SelectItem[];
  formacoes: SelectItem[];
  display = false;
  listCampus = [];

  formacao;
  turno;
  modalidade;

  campus = new Campus();
  curso = new Curso();
  cols: any[];
  breadcrumb = [];

  constructor(
    private campusService: CampusService,
    private router: Router,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Cadastrar Campus e Curso', url: '/cadastrar' }
    ];

    this.cols = [
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
      { label: '  Noturno', value: { id: 3, name: 'NOTURNO' } },
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

  adicionar() {
    this.campusService.adicionar(this.campus)
      .then(dado => {
        this.toasty.success('Campus adicionado com sucesso.');
        this.router.navigate(['/']);
      })
      .catch(erro => {
        this.toasty.error('Não foi possivel adicionar o Campus.');
      });
  }

  adicionarCurso() {
    this.curso.formacao = this.formacao.value.name;
    this.curso.modalidade = this.modalidade.value.name;
    this.curso.turno = this.turno.value.name;

    this.campus.cursos.push(this.curso);
  }

  consultar(pagina = 0) {
    this.campusService.consultar()
      .then(dados => {
        this.listCampus = dados;
      })
      .catch(erro => {
        this.toasty.error('Não foi possivel consulta os Campus.');
      });
  }

  excluirCurso(curso: Curso) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.campus.cursos.length; i++) {
      if (this.campus.cursos[i] === curso) {
        this.campus.cursos.splice(i, 1);
        this.toasty.success('Curso excluido com sucesso.');
      }
    }
    this.consultar();
  }

  showDialog(a: boolean) {
    if (a !== null && a === true) {
      this.display = !this.display;
      this.curso = new Curso();
    }
  }

}
