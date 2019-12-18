import { NotAuthenticatedError } from './../seguranca/auth.service';
import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(
    private toasty: ToastyService,
    private router: Router
  ) { }

  error(errorResponse: any) {
    let msg = 'string';
    console.log(errorResponse);

    msg = 'Erro ao processar requisição. Tente novamente.';

    if (errorResponse.error && errorResponse.error.error_description === 'Access token expired: ' + localStorage.getItem('token')) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/']);

    } else if (errorResponse.error && errorResponse.status >= 400 && errorResponse.status <= 499) {

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      } else if (typeof errorResponse === 'string') {
        msg = errorResponse;
      }
      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) {
      }
    } else if (typeof errorResponse === 'string') {
      msg = errorResponse;
    }
    this.toasty.error(msg);
  }

  success(msg: string) {
    this.toasty.success(msg);
  }

  warning(msg: string) {
    this.toasty.info(msg);
  }

  camposObrigatorios() {
    this.toasty.error('Preencha todos os campos obrigatórios');
  }
}
