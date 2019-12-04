import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
  <div class='ui-fluid'>
  <app-menu [breadcrumb]=breadcrumb></app-menu>
    <p>
      Pagina não encontrada!
    </p>
    </div>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent implements OnInit {

  breadcrumb = [];

  constructor() { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' }
    ];
  }

}
