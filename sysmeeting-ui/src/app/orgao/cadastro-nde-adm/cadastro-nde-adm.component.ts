import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { NdeService } from './../../core/service/nde.service';
import { NgForm } from '@angular/forms';
import { MembroService } from 'src/app/core/service/membro.service';
import { ContaDeAcesso, Membro, Orgao } from './../../core/service/membro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-nde-adm',
  templateUrl: './cadastro-nde-adm.component.html',
  styleUrls: ['./cadastro-nde-adm.component.css']
})
export class CadastroNdeAdmComponent implements OnInit {

  display = false;
  conta = new ContaDeAcesso();
  pt: any;
  breadcrumb = [];
  nde = new Orgao();


  constructor(
    private membroService: MembroService,
    private toasty: ToastyService,
    private router: Router,
    private ndeService: NdeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgão', url: '/orgoes' },
      { label: 'Composição', url: '/orgoes/composicao' }
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
  adicionarNde(form: NgForm) {
    this.ndeService.adicionar({
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes
    })
      .then(dado => {
        form.reset();
        this.toasty.success('NDE adicionado com sucesso');
        this.router.navigate(['/']);
      })
      .catch(erro => {
        this.toasty.error(erro);
      });
  }
  vincularPresidenteAoOrgao() {
    const membro = new Membro();
    membro.contaAcesso = this.conta;
    this.membroService.adicionar(membro)
      .then(() =>
        this.toasty.success('Presidente adicionado com sucesso')
      )
      .catch(erro =>
        this.toasty.error(erro)
      );
  }

  showDialog() {
    this.display = !this.display;
  }

}
