import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-home'},
      {label: 'Login'}
  ];
  }

}
