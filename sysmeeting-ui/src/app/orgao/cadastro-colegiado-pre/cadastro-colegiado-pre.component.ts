import { Membro, Orgao, Colegiado } from './../../core/model';
import { MensagemService } from './../../core/mensagem.service';
import { ToastyService } from 'ng2-toasty';
import { MembroService } from 'src/app/core/service/membro.service';
import { CadastroColegiadoAdmComponent } from './../cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import { ColegiadoService } from './../../core/service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem, LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';
import { zip } from 'rxjs';
@Component({
  selector: 'app-cadastro-colegiado-pre',
  templateUrl: './cadastro-colegiado-pre.component.html',
  styleUrls: ['./cadastro-colegiado-pre.component.css']
})
export class CadastroColegiadoPreComponent implements OnInit {

  display = false;
  tiposMembros: SelectItem[];
  selectTipoMembro: string[];
  id;
  pt: any;
  membro = new Membro();
  membros = [];
  breadcrumb = [];
  titulo: string;
  orgao = new Colegiado();
  data: string;

  constructor(
    private route: ActivatedRoute,
    private membroService: MembroService,
    private mensagem: MensagemService,
    private confirmation: ConfirmationService,
    private router: Router,
    private colegiadoService: ColegiadoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // this.orgao =this.route.snapshot.params.orgao;
    //const idorgao = this.route.snapshot.params['id'];
    if (this.id) {
      this.titulo = 'Edição';
      this.carregarDados(this.id);

    }
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgão', url: '/orgoes' },
      { label: 'Composição', url: '/orgoes/composicao' },
      { label: 'Cadastro de Colegiado', url: '/orgoes/colegiado-adm-novo' }
    ];
    this.tiposMembros = [
      { label: 'Selecione', value: null },
      { label: '  Discente ', value: { id: 1, name: ' DISCENTE' } },
      { label: '  Docente Interno ', value: { id: 2, name: ' DOCENTE_INTERNO' } },
      { label: '  Suplente Discente ', value: { id: 3, name: 'SUPLENTE_DISCENTE' } },
      { label: ' Técnico Administrativo Pedagogico', value: { id: 4, name: 'TECNICO_ADMINISTRATIVO_PEDAGOGICO' } },
      { label: ' Docente Externo', value: { id: 5, name: ' DOCENTE_EXTERNO' } },
      { label: '  Suplente Docente Externo ', value: { id: 6, name: 'SUPLENTE_DOCENTE_EXTERNO' } },
      { label: '  Suplente Técnico Administrativo Pedagogico', value: { id: 7, name: 'SUPLENTE_TECNICO_ADMINISTRATIVO_PEDAGOGICO' } },
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
  get editando() {
    return Boolean(this.orgao.id);
  }
  associar(form: NgForm) {
    if (form.valid) {
      this.membro = new Membro();
      this.membro.email = form.value.email;
      this.membro.senha = form.value.senha;
      this.membro.tipo = form.value.tipo.value.name;
      this.membros.push(this.membro);
      console.log(this.membro);
      form.reset();
      this.showDialog();
    }
  }

  carregarDados(form: NgForm) {
    this.colegiadoService.consultarPeloId(this.id)
      .then(c => {
        this.orgao = c;
        this.ajustarDados();

      }).catch(erro => this.mensagem.error(erro))
      ;

  }

  confirmarExclusao(membro: Membro) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluirMembro(membro);
      }
    });
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].email === membro.email) {
        this.membros.splice(i, 1);
        this.mensagem.success('Membro removido com sucesso');
      }
    }
  }

  adicionarColegiado(form: NgForm) {
    this.colegiadoService.atualizar(this.orgao)
      .then(dado => {
        form.reset();
        this.router.navigate(['/']);
        this.mensagem.success('Colegiado adicionado com sucesso');
      })
      .catch(erro => {
        this.mensagem.error(erro);
      });
  }

  showDialog() {
    this.display = !this.display;
  }
  edição(form: NgForm) {

    this.colegiadoService.atualizar({
      id: this.id,
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      discenteQntdMax: form.value.qtdDiscentes,
      tecAdmQntdMax: form.value.qtdTecAdministrativos,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes,
      docenteExternoQntdMax: form.value.qtdDocentesExternos,
      membros: this.membros
    })
      .then((dados) => {
        form.reset();
        this.router.navigate(['/']);
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  ajustarDados() {
    this.data = moment(this.orgao.inicioDeMandato, 'DD-MM-YYYY').format('DD/MM/YYYY');
  }
}
