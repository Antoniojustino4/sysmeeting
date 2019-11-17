import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ToastyModule } from 'ng2-toasty';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ColegiadoService } from './core/service/colegiado.service';
import { CampusService } from './core/service/campus.service';
import { MembroService } from './core/service/membro.service';
import { ContaDeAcessoService } from './core/service/conta-de-acesso.service';
import { NdeService } from './core/service/nde.service';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ToastyModule.forRoot(),

    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
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

