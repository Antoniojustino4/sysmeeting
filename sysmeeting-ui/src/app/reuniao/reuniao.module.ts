import { REUNIAO_ROUTES } from './reuniao.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgForm, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormReuniaoComponent } from './form-reuniao/form-reuniao.component';
import { FormItemComponent } from './form-item/form-item.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarioReuniaoPreComponent } from './calendario-reuniao-pre/calendario-reuniao-pre.component';
import { CalendarioReuniaoMembroComponent } from './calendario-reuniao-membro/calendario-reuniao-membro.component';



@NgModule({
  declarations: [FormReuniaoComponent, FormItemComponent, CalendarioReuniaoPreComponent, CalendarioReuniaoMembroComponent],

  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BreadcrumbModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    TabViewModule,
    RouterModule.forChild(REUNIAO_ROUTES)
  ],
  exports: [
    FormReuniaoComponent
  ]

})
export class ReuniaoModule { }
