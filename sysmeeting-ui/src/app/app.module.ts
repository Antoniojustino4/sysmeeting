import { MembroService } from './membro.service';
import { FormOrgaoComponent } from './form-orgao.component';
import { CrudOrgaoModule } from './crud-orgao/crud-orgao.module';
import { ContaDeAcessoService } from './conta-de-acesso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    FormOrgaoComponent
  ],
  imports: [
    BrowserModule,

    CrudOrgaoModule,

    AppRoutingModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    CardModule,
    HttpClientModule,
    BreadcrumbModule,
    TableModule
  ],
  providers: [
    ContaDeAcessoService,
    MembroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
