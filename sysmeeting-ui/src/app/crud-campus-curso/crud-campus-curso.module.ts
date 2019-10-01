import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { NgForm, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CrudCampusCursoComponent } from './crud-campus-curso/crud-campus-curso.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


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
    TableModule,
    DialogModule,
    MultiSelectModule
  ],
  exports: [
    CrudCampusCursoComponent
  ]
})
export class CrudCampusCursoModule { }
