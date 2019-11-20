import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { CursoService } from './../../core/service/curso.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

export class CampusFilter {
  nome: string;
  formacao: string;
  pagina = 0;
  itensPorPagina = 12;
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
  totalRegistros = 0;
formacoes: SelectItem[];
  exibindoInf = false;
  constructor(
    private cursoService: CursoService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' }
    ];
    this.formacoes = [
      { label: 'Selecione', value: null },
      { label: '  TECNOLOGO ', value: { id: 1, name: 'TECNOLOGO' } },
      { label: ' BACHARELADO', value: { id: 2, name: 'BACHARELADO' } },
      { label: '  LICENCIATURA', value: { id: 3, name: 'LICENCIATURA' } }
    ];
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.cursoService.pesquisar(this.filtro)
      .then(dados => {
        this.cursos = dados.content;
        this.totalRegistros = dados.totalElements;
        console.log(dados);
      }).catch(erro =>
        this.toasty.error('erro')
      );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }



}
