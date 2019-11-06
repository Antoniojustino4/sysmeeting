import { CalendarioReuniaoMembroComponent } from './calendario-reuniao-membro/calendario-reuniao-membro.component';
import { CalendarioReuniaoPreComponent } from './calendario-reuniao-pre/calendario-reuniao-pre.component';
import { FormReuniaoComponent } from './form-reuniao/form-reuniao.component';
import { FormItemComponent } from './form-item/form-item.component';
import { Routes } from '@angular/router';


export const REUNIAO_ROUTES: Routes = [
  {
    path: 'form-item',
    component: FormItemComponent
  },
  {
    path: 'form-reuniao',
    component: FormReuniaoComponent
  },
  {
    path: 'calendario-reuniao-pre',
    component: CalendarioReuniaoPreComponent
  },
  {
    path: 'calendario-reuniao-membro',
    component: CalendarioReuniaoMembroComponent
  }
];
