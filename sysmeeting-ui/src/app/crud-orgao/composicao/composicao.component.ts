import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composicao',
  templateUrl: './composicao.component.html',
  styleUrls: ['./composicao.component.css']
})
export class ComposicaoComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'Update', icon: 'pi pi-refresh'},
        {label: 'Delete', icon: 'pi pi-times'},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
}

}
