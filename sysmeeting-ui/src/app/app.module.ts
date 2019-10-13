import { ReuniaoModule } from './reuniao/reuniao.module';
import { ColegiadoService } from './core/service/colegiado.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudCampusCursoModule } from './crud-campus-curso/crud-campus-curso.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CampusService } from './core/service/campus.service';
import { MembroService } from './core/service/membro.service';
import { CrudOrgaoModule } from './crud-orgao/crud-orgao.module';
import { ContaDeAcessoService } from './core/service/conta-de-acesso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NdeService } from './core/service/nde.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    MessagesModule,
    MessageModule,
    SharedModule,
    CrudOrgaoModule,
    CrudCampusCursoModule,
    ReuniaoModule
  ],
  providers: [
    ContaDeAcessoService,
    MembroService,
    CampusService,
    ColegiadoService,
    NdeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
