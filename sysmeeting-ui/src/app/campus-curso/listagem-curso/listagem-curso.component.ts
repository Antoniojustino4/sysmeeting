import { CampusService } from './../../core/service/campus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-curso',
  templateUrl: './listagem-curso.component.html',
  styleUrls: ['./listagem-curso.component.css']
})
export class ListagemCursoComponent implements OnInit {

  cursos: [];

  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.consultar();
  }
  consultar(pagina = 0) {
    this.campusService.consultar()
      .then(dados => {
        this.cursos = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }


}
