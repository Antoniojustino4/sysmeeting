import { Membro, Orgao } from './../../core/model';
import { MensagemService } from './../../core/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { NdeService } from './../../core/service/nde.service';
import { NgForm } from '@angular/forms';
import { MembroService } from 'src/app/core/service/membro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-nde-adm',
  templateUrl: './cadastro-nde-adm.component.html',
  styleUrls: ['./cadastro-nde-adm.component.css']
})
export class CadastroNdeAdmComponent implements OnInit {

  membro = new Membro();
  membros = [];
  display = false;
  pt: any;
  breadcrumb = [];
  nde = new Orgao();
  id;


  constructor(
    private membroService: MembroService,
    private mensagem: MensagemService,
    private router: Router,
    private ndeService: NdeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
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

  vincularPresidenteAoOrgao() {
    this.membro.tipo = 'PRESIDENTE';
    this.membros.push(this.membro);
    this.showDialog();
  }

  adicionarNde(form: NgForm) {

    this.ndeService.adicionar({
      inicioDeMandato:form.value.inicioDeVigencia,
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes,
      membros: this.membros
    }, this.id)
      .then(dado => {
        form.reset();
        this.mensagem.success('NDE adicionado com sucesso');
        this.router.navigate(['/']);
      })
      .catch(erro => {
        this.mensagem.error(erro);
      });
  }

  showDialog() {
    this.display = !this.display;
  }

}
