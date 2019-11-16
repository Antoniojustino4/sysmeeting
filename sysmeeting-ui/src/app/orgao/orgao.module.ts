import { CoreModule } from './../core/core.module';
import { ComposicaoComponent } from './composicao/composicao.component';
import { ComposicaoColegiadoComponent } from './composicao-colegiado/composicao-colegiado.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ColegiadoService } from '../core/service/colegiado.service';
import { MembroService } from '../core/service/membro.service';
import { NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
import { NdeService } from '../core/service/nde.service';
import { RouterModule } from '@angular/router';
import { ORGAO_ROUTES } from './orgao.routes';

class Colegiado {
  inicioDeVigencia: Date;
  mesesDaVigencia: number;
  qtdDiscentes: number;
  qtdTecAdministrativos: number;
  portaria: number;
  mesesDeReconducao: number;
  qtdDocentes: number;
  qtdDocentesExternos: number;
  regulamento: number;
  membros: Membro[];
}

class NDE {
  inicioDeVigencia: Date;
  mesesDaVigencia: number;
  qtdDocentes: number;
  portaria: number;
  mesesDeReconducao: number;
  regulamento: number;
  membros: Membro[];
}

class Membro {
  nome: string;
  email: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
}

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
    RouterModule.forChild(ORGAO_ROUTES)
  ],
  exports: [

  ]
})

export class OrgaoModule {}
