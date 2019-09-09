import { NgModule } from '@angular/core';
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

class Cliente {
  nome: string;
  email: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
}


@NgModule({
  declarations: [CadastroColegiadoAdmComponent, CadastroColegiadoPreComponent, CadastroColegiadoComponent],
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
    InputMaskModule
  ],
  exports: [
    CadastroColegiadoAdmComponent,
    CadastroColegiadoPreComponent
  ]
})

export class CrudOrgaoModule {

  isAdmin = false;
  cliente = new Cliente();

  salvar(form: NgForm) {
    this.cliente.nome = form.value.nome;
    this.cliente.email = form.value.email;
    this.cliente.cpf = form.value.cpf;
    this.cliente.dataDeNascimento = form.value.dataDeNascimento;
    this.cliente.grupo = form.value.grupo;

    console.log(this.cliente);
    console.log(form);
    form.reset();
  }

}
