import { GerenciarItemComponent } from './gerenciar-item/gerenciar-item.component';
import { CadastroReuniaoComponent } from './cadastro-reuniao/cadastro-reuniao.component';
import { CalendarioReuniaoMembroComponent } from './calendario-reuniao-membro/calendario-reuniao-membro.component';
import { CalendarioReuniaoPreComponent } from './calendario-reuniao-pre/calendario-reuniao-pre.component';
import { Routes } from '@angular/router';


export const REUNIAO_ROUTES: Routes = [
  {
    path: 'gerenciar-item',
    component: GerenciarItemComponent
  },
  {
    path: 'cadastro-reuniao',
    component: CadastroReuniaoComponent
  },
  {
    path: 'calendario-reuniao-pre',
    component: CalendarioReuniaoPreComponent
  },
  {
    path: 'calendario-reuniao-membro',
    component: CalendarioReuniaoMembroComponent
  },
  {
    path: 'gerenciar-item',
    component: GerenciarItemComponent
  },
];
