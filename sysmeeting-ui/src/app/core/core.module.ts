import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';



@NgModule({
  declarations: [
    MenuComponent,
    TemplateComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MultiSelectModule,
    CardModule,
    MenubarModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    TemplateComponent,
    LoginComponent
  ]
})
export class CoreModule { }
