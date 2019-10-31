import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NdeService } from 'src/app/core/service/nde.service';

@Component({
  selector: 'app-cadastro-nde',
  templateUrl: './cadastro-nde.component.html',
  styleUrls: ['./cadastro-nde.component.css']
})
export class CadastroNdeComponent implements OnInit {

  constructor(private ndeService: NdeService) { }

  ngOnInit() {
  }

  adicionarNde(form: NgForm) {
    this.ndeService.adicionar({
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes
    })
      .then(dado => {

      })
      .catch(erro => {
        alert(erro);
      });
  }
}
