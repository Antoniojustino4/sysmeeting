import { FormsModule } from '@angular/forms';
import { AuthService } from './../seguranca/auth.service';
import { NdeService } from 'src/app/core/service/nde.service';
import { ColegiadoService } from './service/colegiado.service';
import { CampusService } from './service/campus.service';
import { MembroService } from 'src/app/core/service/membro.service';
import { ContaDeAcessoService } from './service/conta-de-acesso.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from 'primeng/menubar';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CardModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    ButtonModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
    LoginComponent
  ],
  providers: [
    ContaDeAcessoService,
    MembroService,
    CampusService,
    ColegiadoService,
    NdeService,
    AuthService,
    {provide: LOCALE_ID, useValue: 'pt_BR'}
  ]
})
export class CoreModule { }
