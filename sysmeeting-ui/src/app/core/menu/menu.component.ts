import { CursoService } from './../service/curso.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


class Curso{
  nome: string;
  turno: string;
  modalidade: string;
  formacao: string;
}
export class MenuComponent implements OnInit {

    inst: SelectItem[];
    formacao: SelectItem[];
    selectInst: string[];
    selectForm: string[];
    cols: any[];
  private items: MenuItem[];
  curso = new Curso();
  cursos = [];

  constructor(private cursoService: CursoService) {
    this.cols = [
      { field: 'curso.nome', header: 'Nome' },
      { field: 'curso.formacao', header: 'Formação' },
      { field: 'curso.modalidade', header: 'Modalidade' },
      { field: 'curso.turno', header: 'Turno' },
    ];
    this.inst = [

      {label: '  IFPB-Campus Monteiro', value : {id: 1, name: ' IFPB Monteiro'}}
    ];
    this.formacao = [
         {label: 'Licenciatura', value: { id: 1, name: 'Licenciatura'}}, {label:
              'Tecnológica', value: {id: 2, name: ' Tecnologica'}},
         {label:
              ' Bacharelado', value: {id: 3, name: ' Bacharelado'}}

];

  }

  ngOnInit() {
        this.consultar();
        this.items = [
            {label: 'Página Principal' , url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}



        ];
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
}


