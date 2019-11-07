import { CursoService } from './../../core/service/curso.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.consultar();
  }

  pesquisar() {
    this.cursoService.pesquisar(this.filtro)
    .then(dados => {
      this.cursos = dados.content;
    });
  }

  consultar(pagina = 0) {
    this.cursoService.consultar()
      .then(dados => {
        this.cursos = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }


}
