import { ColegiadoService } from './../service/colegiado.service';
import { MembroService } from '../service/membro.service';
import { NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroColegiadoAdmComponent } from './cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {SpinnerModule} from 'primeng/spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import { CadastroColegiadoPreComponent } from './cadastro-colegiado-pre/cadastro-colegiado-pre.component';
import { CadastroColegiadoComponent } from './cadastro-colegiado/cadastro-colegiado.component';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import { CadastroNdeComponent } from './cadastro-nde/cadastro-nde.component';
import { CadastroNdeAdmComponent } from './cadastro-nde-adm/cadastro-nde-adm.component';
import { CadastroNdePreComponent } from './cadastro-nde-pre/cadastro-nde-pre.component';
import { ComposicaoComponent } from './composicao/composicao.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ComposicaoNdeComponent } from './composicao-nde/composicao-nde.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ComposicoesAnterioresComponent } from './composicoes-anteriores/composicoes-anteriores.component';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import { NdeService } from '../service/nde.service';

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
    CadastroColegiadoComponent,
    CadastroNdeComponent,
    CadastroNdeAdmComponent,
    CadastroNdePreComponent,
    ComposicaoComponent,
    ComposicaoNdeComponent,
    ComposicoesAnterioresComponent],

  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
    MultiSelectModule
  ],
  exports: [
    CadastroColegiadoAdmComponent,
    CadastroColegiadoPreComponent,
    CadastroNdeAdmComponent,
    CadastroNdePreComponent,
    ComposicoesAnterioresComponent,
    ComposicaoNdeComponent
  ]
})

export class CrudOrgaoModule {

  colegiados: Colegiado[];
  ndes: NDE[];

  membros: Membro[];

  constructor(private colegiadoService: ColegiadoService, private ndeService: NdeService) { }

  adicionarColegiado(form: NgForm) {
    this.colegiadoService.adicionar({
      nome: form.value.nome, turno: form.value.turno, modalidade: form.value.modalidade,
      formacao: form.value.formacao
    })
      .then(dado => {
        this.consultarColegiado();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  adicionarNde(form: NgForm) {
    this.ndeService.adicionar({
      nome: form.value.nome, turno: form.value.turno, modalidade: form.value.modalidade,
      formacao: form.value.formacao
    })
      .then(dado => {
        this.consultarNde();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  consultarColegiado() {
    this.colegiadoService.consultar()
      .then(dados => {
        this.colegiados = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  consultarNde() {
    this.ndeService.consultar()
      .then(dados => {
        this.colegiados = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluirColegiado(id: number) {
    this.colegiadoService.excluir(id)
      .then(() => {
        this.consultarColegiado();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluirNde(id: number) {
    this.ndeService.excluir(id)
      .then(() => {
        this.consultarNde();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizarColegiado(orgao: any) {
    this.colegiadoService.atualizar(orgao)
      .then(() => {
        this.consultarColegiado();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizarNde(orgao: any) {
    this.ndeService.atualizar(orgao)
      .then(() => {
        this.consultarNde();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  isAdmin(): boolean {
    return true;
  }

}
