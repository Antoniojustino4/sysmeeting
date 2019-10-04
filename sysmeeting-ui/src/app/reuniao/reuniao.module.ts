import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgForm, FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { FormReuniaoComponent } from './form-reuniao/form-reuniao.component';
import { FormItemComponent } from './form-item/form-item.component';
@NgModule({
  declarations: [FormReuniaoComponent, FormItemComponent],

  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BreadcrumbModule,
    CardModule,
    CalendarModule
  ],
  exports: [
    FormReuniaoComponent
  ]

})
export class ReuniaoModule { }
