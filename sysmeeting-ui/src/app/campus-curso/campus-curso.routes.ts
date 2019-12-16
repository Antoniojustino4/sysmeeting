import { AuthGuard } from './../seguranca/auth.guard';
import { ListagemCursoComponent } from './listagem-curso/listagem-curso.component';
import { Routes } from '@angular/router';
import { CadastroCampusCursoComponent } from './cadastro-campus-curso/cadastro-campus-curso.component';


export const CAMPUS_CURSO_ROUTES: Routes = [
  {
    path: '',
    component: ListagemCursoComponent
  },
  {
    path: 'cadastrar',
    component: CadastroCampusCursoComponent,
    canActivate: [AuthGuard],
    data: {roles: ['DISCENTE']}
  }
];
