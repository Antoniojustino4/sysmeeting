import { ListagemCursoComponent } from './listagem-curso/listagem-curso.component';
import { CrudCampusCursoComponent } from './crud-campus-curso/crud-campus-curso.component';
import { Routes } from '@angular/router';


export const CAMPUS_CURSO_ROUTES: Routes = [
  {
    path: '',
    component: ListagemCursoComponent
  },
  {
    path: 'cadastrar',
    component: CrudCampusCursoComponent
  }
];
