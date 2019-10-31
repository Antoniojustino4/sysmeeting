import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NdeService } from 'src/app/core/service/nde.service';

@Component({
  selector: 'app-cadastro-nde',
  templateUrl: './cadastro-nde.component.html',
  styleUrls: ['./cadastro-nde.component.css']
})
export class CadastroNdeComponent implements OnInit {

  pt: any;

  constructor(private ndeService: NdeService) { }

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
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
