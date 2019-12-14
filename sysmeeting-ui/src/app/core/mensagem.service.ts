import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private toasty: ToastyService) { }

  error(errorResponse: any) {
    let msg = 'string';
    console.log(errorResponse);

    msg = 'Erro ao processar requisição. Tente novamente.';
    if (errorResponse.error) {
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
