import { Colegiado } from './../../core/service/colegiado.service';
import { Membro, ContaDeAcesso } from './../../core/service/membro.service';
import { ColegiadoService } from '../../core/service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MembroService } from 'src/app/core/service/membro.service';


@Component({
  selector: 'app-cadastro-colegiado-adm',
  templateUrl: './cadastro-colegiado-adm.component.html',
  styleUrls: ['./cadastro-colegiado-adm.component.css']
})
export class CadastroColegiadoAdmComponent implements OnInit {

  display = false;
  membro = new Membro();
  colegiados: Colegiado[];
  conta = new ContaDeAcesso();
  membros: Membro[];
  pt: any;
  breadcrumb = [];

  constructor(
    private colegiadoService: ColegiadoService,
    private membroService: MembroService) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial' , url: '/', icon: 'pi pi-home'},
      { label: 'Órgão', url: '/orgoes' },
      { label: 'Composição', url: '/orgoes/composicao' },
      { label: 'Cadastro de NDE', url: '/orgoes/nde-adm-novo' }
    ];
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
        form.reset();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  vincularPresidenteAoOrgao() {
    const membro = new Membro();
    membro.contaAcesso = this.conta;
    this.membroService.adicionar(membro);
  }

  showDialog(a: boolean) {
    if (a) {
      this.display = !this.display;
    }
  }

}
