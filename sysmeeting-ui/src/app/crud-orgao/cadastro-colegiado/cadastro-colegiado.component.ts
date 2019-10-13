import { CrudOrgaoModule } from './../crud-orgao.module';
import { ColegiadoService } from '../../core/service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-colegiado',
  templateUrl: './cadastro-colegiado.component.html',
  styleUrls: ['./cadastro-colegiado.component.css']
})
export class CadastroColegiadoComponent implements OnInit {

  isAdmin = true;

  constructor(private colegiadoService: ColegiadoService) { }

  ngOnInit() {
  }

  adicionarColegiado(form: NgForm) {
    this.colegiadoService.adicionar({
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      discenteQntdMax: form.value.qtdDiscentes,
      tecAdmQntdMax: form.value.qtdTecAdministrativos,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes,
      docenteExternoQntdMax: form.value.qtdDocentesExternos
    })
      .then(dado => {

      })
      .catch(erro => {
        alert(erro);
      });
  }

}
