import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-autorizado',
  template: `
  <div class='ui-fluid'>
    <app-menu [breadcrumb]=breadcrumb></app-menu>
    <h1 class="text-center">Acesso Negado</h1>
  </div>
  `,
  styles: []
})
export class NaoAutorizadoComponent implements OnInit {

  breadcrumb = [];

  constructor() { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' }
    ];
  }

}
