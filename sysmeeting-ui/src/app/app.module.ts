import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SegurancaModule } from './seguranca/seguranca.module';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ROUTES } from './app.routes';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    CoreModule,
    SharedModule,
    SegurancaModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

