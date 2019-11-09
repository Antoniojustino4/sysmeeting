import { CadastroNdePreComponent } from './cadastro-nde-pre/cadastro-nde-pre.component';
import { CadastroNdeAdmComponent } from './cadastro-nde-adm/cadastro-nde-adm.component';
import { ComposicoesAnterioresComponent } from './composicoes-anteriores/composicoes-anteriores.component';
import { CadastroColegiadoPreComponent } from './cadastro-colegiado-pre/cadastro-colegiado-pre.component';
import { CadastroColegiadoComponent } from './cadastro-colegiado/cadastro-colegiado.component';
import { ComposicaoNdeComponent } from './composicao-nde/composicao-nde.component';
import { ComposicaoColegiadoComponent } from './composicao-colegiado/composicao-colegiado.component';
import { Routes } from '@angular/router';
import { CadastroColegiadoAdmComponent } from './cadastro-colegiado-adm/cadastro-colegiado-adm.component';


export const ORGAO_ROUTES: Routes = [
  {
    path: 'colegiado',
    component: ComposicaoColegiadoComponent,
  },
  {
    path: 'colegiado-adm-novo',
    component: CadastroColegiadoAdmComponent
  },
  {
    path: 'colegiado-pre-novo',
    component: CadastroColegiadoPreComponent
  },
  {
    path: 'colegiado-anterior',
    component: ComposicoesAnterioresComponent
  },
  {
    path: 'nde',
    component: ComposicaoNdeComponent,
  },
  {
    path: 'nde-adm-novo',
    component: CadastroNdeAdmComponent
  },
  {
    path: 'nde-pre-novo',
    component: CadastroNdePreComponent
  },
  {
    path: 'nde-anterior',
    component: ComposicoesAnterioresComponent
  }
];
