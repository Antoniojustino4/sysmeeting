import { ColegiadoService } from './service/colegiado.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudCampusCursoModule } from './crud-campus-curso/crud-campus-curso.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CursoService } from './service/curso.service';
import { MembroService } from './service/membro.service';
import { CrudOrgaoModule } from './crud-orgao/crud-orgao.module';
import { ContaDeAcessoService } from './service/conta-de-acesso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NdeService } from './service/nde.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    SharedModule,
    CrudOrgaoModule,
    CrudCampusCursoModule
  ],
  providers: [
    ContaDeAcessoService,
    MembroService,
    CursoService,
    ColegiadoService,
    NdeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
