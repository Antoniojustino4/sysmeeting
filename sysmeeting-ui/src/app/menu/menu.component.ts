import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    inst: SelectItem[];
    formacao: SelectItem[];
    selectInst: string[];
    selectForm: string[];
  private items: MenuItem[];
  constructor() {

    this.inst=[

      {label: '  IFPB-Campus Monteiro', value : {id: 1, name: ' IFPB Monteiro'}}
    ];
    this.formacao = [
         {label: 'Licenciatura', value:{ id: 1, name: 'Licenciatura'}},{label:
              'Tecnológica', value:{id: 2, name: ' Tecnologica'}},
         {label:
              ' Bacharelado', value:{id: 3, name: ' Bacharelado'}}

];

  }

  ngOnInit() {
        this.items = [
            {label: 'Página Principal' , url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}



        ];
    }
}


