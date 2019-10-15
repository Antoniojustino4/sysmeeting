import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MessageModule} from 'primeng/message';
import {FieldsetModule} from 'primeng/fieldset';
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
