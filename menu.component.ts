import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];
  constructor() { }

  ngOnInit() {
        this.items = [
            {label: 'Página Principal' , url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}



        ];
    }
}


