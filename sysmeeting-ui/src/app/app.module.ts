import { CrudCampusCursoComponent } from './campus-curso/crud-campus-curso/crud-campus-curso.component';
import { ROUTES } from './app.routes';
import { CampusCursoModule } from './campus-curso/campus-curso.module';
import { OrgaoModule } from './orgao/orgao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ReuniaoModule } from './reuniao/reuniao.module';
import { ColegiadoService } from './core/service/colegiado.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CampusService } from './core/service/campus.service';
import { MembroService } from './core/service/membro.service';
import { ContaDeAcessoService } from './core/service/conta-de-acesso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NdeService } from './core/service/nde.service';
import { ReuniaoService } from './core/service/reuniao.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ContaDeAcessoService,
    MembroService,
    CampusService,
    ColegiadoService,
    NdeService,
    ReuniaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

