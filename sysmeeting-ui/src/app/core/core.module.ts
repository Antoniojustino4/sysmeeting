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



@NgModule({
  declarations: [
    MenuComponent,
    TemplateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    MultiSelectModule,
    CardModule,
    MenubarModule,
    RouterModule
    CardModule,
    ButtonModule,
    DropdownModule,
    FieldsetModule,
    MessageModule,

  ],
  exports: [
    MenuComponent,
    TemplateComponent,
    LoginComponent
  ]
})
export class CoreModule { }
