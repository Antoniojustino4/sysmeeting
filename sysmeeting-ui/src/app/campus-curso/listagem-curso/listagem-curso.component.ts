import { CursoService } from './../../core/service/curso.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

export class CampusFilter {
  nome: string;
  formacao: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Component({
  selector: 'app-listagem-curso',
  templateUrl: './listagem-curso.component.html',
  styleUrls: ['./listagem-curso.component.css']
})
export class ListagemCursoComponent implements OnInit {

  cursos: [];
  filtro = new CampusFilter();
  breadcrumb = [];

  constructor(
    private cursoService: CursoService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' }
    ];
    this.consultar();
  }

  pesquisar() {
    this.cursoService.pesquisar(this.filtro)
      .then(dados => {
        this.cursos = dados.content;
      }).catch(erro =>
        this.toasty.error('Não foi possivel consulta os cursos')
      );
  }

  consultar(pagina = 0) {
    this.cursoService.consultar()
      .then(dados => {
        this.cursos = dados;
      })
      .catch(erro =>
        this.toasty.error('Não foi possivel consulta os cursos')
      );
  }


}
