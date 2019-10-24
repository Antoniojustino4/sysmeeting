import { CrudCampusCursoComponent } from './crud-campus-curso/crud-campus-curso.component';
import { CAMPUS_CURSO_ROUTES } from './campus-curso.routes';


import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { NgForm, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { RouterModule } from '@angular/router';
import {InputMaskModule} from 'primeng/inputmask';


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
    MessageModule,
    InputMaskModule,
    RouterModule.forChild(CAMPUS_CURSO_ROUTES)
  ],
  exports: [
    CrudCampusCursoComponent
  ]
})
export class CampusCursoModule { }
