import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./campus-curso/campus-curso.module').then(m => m.CampusCursoModule)
  },
  {
    path: 'orgaos',
    loadChildren: () => import('./orgao/orgao.module').then(m => m.OrgaoModule)
  },
  {
    path: 'reunioes',
    loadChildren: () => import('./reuniao/reuniao.module').then(m => m.ReuniaoModule)
  },
  {
    path: 'atas',
    loadChildren: () => import('./ata/ata.module').then(m => m.AtaModule)
  },
  {
    path: 'pagina-nao-encontrada',
    component: PaginaNaoEncontradaComponent,
  },
  {
    path: '**',
    redirectTo: 'pagina-nao-encontrada',
  },
];
