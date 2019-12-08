import { CoreModule } from './../core/core.module';
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
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarioReuniaoPreComponent } from './calendario-reuniao-pre/calendario-reuniao-pre.component';
import { CalendarioReuniaoMembroComponent } from './calendario-reuniao-membro/calendario-reuniao-membro.component';
import { CadastroReuniaoComponent } from './cadastro-reuniao/cadastro-reuniao.component';
import { GerenciarItemComponent } from './gerenciar-item/gerenciar-item.component';
import {PaginatorModule} from 'primeng/paginator';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    CalendarioReuniaoPreComponent,
    CalendarioReuniaoMembroComponent,
    CadastroReuniaoComponent,
    GerenciarItemComponent],

  imports: [
    CommonModule,
    CoreModule,
    PaginatorModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    ScrollPanelModule,
    BreadcrumbModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    RouterModule,
    TabViewModule,
    RouterModule.forChild(REUNIAO_ROUTES)
  ]
})
export class ReuniaoModule { }
