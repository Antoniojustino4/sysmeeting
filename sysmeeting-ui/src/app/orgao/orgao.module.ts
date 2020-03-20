import { PasswordModule } from 'primeng/password';
import { CoreModule } from './../core/core.module';
import { ComposicaoComponent } from './composicao/composicao.component';
import { ComposicaoColegiadoComponent } from './composicao-colegiado/composicao-colegiado.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroColegiadoAdmComponent } from './cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SpinnerModule} from 'primeng/spinner';
import {FileUploadModule} from 'primeng/fileupload';
import { CadastroColegiadoPreComponent } from './cadastro-colegiado-pre/cadastro-colegiado-pre.component';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import { CadastroNdeAdmComponent } from './cadastro-nde-adm/cadastro-nde-adm.component';
import { CadastroNdePreComponent } from './cadastro-nde-pre/cadastro-nde-pre.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ComposicaoNdeComponent } from './composicao-nde/composicao-nde.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ComposicoesAnterioresComponent } from './composicoes-anteriores/composicoes-anteriores.component';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import { RouterModule } from '@angular/router';
import { ORGAO_ROUTES } from './orgao.routes';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    CadastroColegiadoAdmComponent,
    CadastroColegiadoPreComponent,

    CadastroNdeAdmComponent,
    CadastroNdePreComponent,

    ComposicaoComponent,
    ComposicaoColegiadoComponent,
    ComposicaoNdeComponent,
    ComposicoesAnterioresComponent],

  imports: [
    CommonModule,
    TooltipModule,
    CoreModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    SpinnerModule,
    FileUploadModule,
    CardModule,
    InputMaskModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    RouterModule.forChild(ORGAO_ROUTES)
  ],
  exports: [

  ]
})

export class OrgaoModule {}
