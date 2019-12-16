import { Curso, Membro } from './../../core/model';
import { MensagemService } from './../../core/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
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
  membros = [];
  curso = new Curso();
  pt: any;
  breadcrumb = [];


  constructor(
    private colegiadoService: ColegiadoService,
    private router: Router,
    private membroService: MembroService,
    private mensagem: MensagemService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.curso.id = this.route.snapshot.params.id;
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
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

  vincularPresidenteAoOrgao(form: NgForm) {
    if (form.valid) {
      this.membro.tipo = 'PRESIDENTE';
      this.membros.push(this.membro);
      this.showDialog(true);
    }
  }

  adicionarColegiado(form: NgForm) {
    if (form.valid) {
      this.colegiadoService.adicionar({
        inicioDeMandato: form.value.inicioDeVigencia,
        vigenciaMandatoMeses: form.value.mesesDaVigencia,
        discenteQntdMax: form.value.qtdDiscentes,
        tecAdmQntdMax: form.value.qtdTecAdministrativos,
        vigenciaReconducaoMeses: form.value.mesesDeReconducao,
        docenteQntdMax: form.value.qtdDocentes,
        docenteExternoQntdMax: form.value.qtdDocentesExternos,
        membros: this.membros
      }, this.curso.id)
        .then(dado => {
          this.mensagem.success('Colegiado salvo com sucesso');
          this.router.navigate(['/']);
          form.reset();
        })
        .catch(erro => {
          this.mensagem.error(erro);
        });
    }
  }

  showDialog(a: boolean) {
    if (a) {
      this.display = !this.display;
    }
  }

}
