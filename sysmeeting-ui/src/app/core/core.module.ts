import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from 'primeng/menubar';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MultiSelectModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    LoginComponent
  ]
})
export class CoreModule { }
