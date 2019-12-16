import { EdicaoAtaComponent } from './edicao-ata/edicao-ata.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';


export const ATA_ROUTES: Routes = [
  {
    path: '',
    component: EdicaoAtaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  }
];
