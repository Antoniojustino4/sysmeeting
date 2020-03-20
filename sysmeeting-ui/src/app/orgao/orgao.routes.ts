import { AuthGuard } from './../seguranca/auth.guard';
import { CadastroNdePreComponent } from './cadastro-nde-pre/cadastro-nde-pre.component';
import { CadastroNdeAdmComponent } from './cadastro-nde-adm/cadastro-nde-adm.component';
import { ComposicoesAnterioresComponent } from './composicoes-anteriores/composicoes-anteriores.component';
import { CadastroColegiadoPreComponent } from './cadastro-colegiado-pre/cadastro-colegiado-pre.component';
import { ComposicaoNdeComponent } from './composicao-nde/composicao-nde.component';
import { ComposicaoColegiadoComponent } from './composicao-colegiado/composicao-colegiado.component';
import { Routes } from '@angular/router';
import { CadastroColegiadoAdmComponent } from './cadastro-colegiado-adm/cadastro-colegiado-adm.component';


export const ORGAO_ROUTES: Routes = [
  {
    path: 'colegiado/:id',
    component: ComposicaoColegiadoComponent,
  },
  {
    path: 'colegiado-adm-novo/:id',
    component: CadastroColegiadoAdmComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMINISTRADOR']}
  },
  {
    path: 'colegiado-pre-novo/:id',
    component: CadastroColegiadoPreComponent,
    canActivate: [AuthGuard],
    data: {roles: ['PRESIDENTE']}
  },
  {
    path: 'colegiado-anterior/:id',
    component: ComposicoesAnterioresComponent
  },
  {
    path: 'nde/:id',
    component: ComposicaoNdeComponent,
  },
  {
    path: 'nde-adm-novo/:id',
    component: CadastroNdeAdmComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMINISTRADOR']}
  },
  {
    path: 'nde-pre-novo/:id',
    component: CadastroNdePreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nde-anterior/:id',
    component: ComposicoesAnterioresComponent
  }
];
