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
  }
];
