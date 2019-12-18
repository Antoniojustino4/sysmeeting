import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ATA_ROUTES } from './ata.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdicaoAtaComponent } from './edicao-ata/edicao-ata.component';
import { AccordionModule } from 'primeng/accordion';
import { EditorModule } from 'primeng/editor';
import { TabViewModule } from 'primeng/tabview';
import { MenuItem } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { NgForm, FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [EdicaoAtaComponent],
  imports: [
    CommonModule,
    AccordionModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    EditorModule,
    TabViewModule,
    FormsModule,
    CardModule,
    DialogModule,
    RouterModule.forChild(ATA_ROUTES)
  ]
})
export class AtaModule { }
