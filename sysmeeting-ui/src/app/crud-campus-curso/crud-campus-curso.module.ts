import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { NgForm, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CrudCampusCursoComponent } from './crud-campus-curso/crud-campus-curso.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    CrudCampusCursoComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    FormsModule,
    CardModule,
    DialogModule,
    MultiSelectModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    CrudCampusCursoComponent
  ]
})
export class CrudCampusCursoModule { }
