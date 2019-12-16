import { ItemFilter } from './../../core/filter';
import { Reuniao, Item } from './../../core/model';
import { MensagemService } from './../../core/mensagem.service';
import { ToastyService } from 'ng2-toasty';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem, LazyLoadEvent } from 'primeng/api';

import * as moment from 'moment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-reuniao',
  templateUrl: './cadastro-reuniao.component.html',
  styleUrls: ['./cadastro-reuniao.component.css']
})
export class CadastroReuniaoComponent implements OnInit {
  private items: MenuItem[];
  tipoReuniao: SelectItem[];
  value: Date;
  display = false;
  reuniao = new Reuniao();
  cols: any[];
  item = new Item();
  breadcrumb = [];

  pt: any;
  itens = [];
  tipo;
  data: Date;
  horaInicio: Date;
  horaFim: Date;
  idOrgao;
  orgao;
  filter = new ItemFilter();

  constructor(
    private reuniaoService: ReuniaoService,
    private itemService: ItemDePautaService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagem: MensagemService) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.origem === 'colegiado' || this.route.snapshot.params.origem === 'nde') {
      this.idOrgao = this.route.snapshot.params.id;
      this.orgao = this.route.snapshot.params.origem;
    } else {
      this.reuniao.id = this.route.snapshot.params.id;
      if (this.reuniao.id) {
        this.carregarDados(this.reuniao.id);
      }
    }

    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgao', url: '/' + this.orgao + '/' + this.idOrgao },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-pre' },
      { label: 'Cadastro de Reunião', url: '/orgoes/cadastro-reuniao' },
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
    this.tipoReuniao = [
      { label: 'Seleciona um tipo', value: null },
      { label: '  Ordinária', value: { id: 1, name: 'ORDINARIA' } },
      { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];
    this.cols = [
      { field: 'descricao', header: 'Descrição' },
      { field: 'assunto', header: 'Assunto' }
    ];
    this.items = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    }, {
      label: 'Órgão do Curso', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Reunião', url: '' }
    ];
  }

  salvar() {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionarReuniao();
    }
  }
  adicionarReuniao() {
    this.ajustarDados();
    this.reuniaoService.adicionar(this.reuniao, this.idOrgao, this.orgao)
      .then(() => {
        this.mensagem.success('Reunião adicionada com sucesso.');
        this.reuniao = new Reuniao();
        this.router.navigate(['reunioes', 'calendario-reuniao-membro']);
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }


  atualizar() {
    this.ajustarDados();
    this.reuniaoService.atualizar(this.reuniao)
      .then(() => {
        this.mensagem.success('Reunião atualizada com sucesso.');
        this.reuniao = new Reuniao();
        this.router.navigate(['reunioes', 'calendario-reuniao-pre']);

      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }
  ajustarDados() {
    this.reuniao.tipo = this.tipo.value.name;
    this.reuniao.data = moment(this.data).format('DD-MM-YYYY');
    this.reuniao.horarioInicio = moment(this.horaInicio).format('HH:mm:ss');
    this.reuniao.horarioFinal = moment(this.horaFim).format('HH:mm:ss');
  }

  get editando() {
    return Boolean(this.reuniao.id);
  }

  carregarDados(id) {
    this.reuniaoService.consultarPeloId(id)
      .then(dados => {
        const ano = dados.data[6] + dados.data[7] + dados.data[8] + dados.data[9];
        const mes = dados.data[3] + dados.data[4];
        const dia = dados.data[0] + dados.data[1];

        const hora = dados.horarioInicio[0] + dados.horarioInicio[1];
        const minuto = dados.horarioInicio[3] + dados.horarioInicio[4];

        const hora1 = dados.horarioFinal[0] + dados.horarioFinal[1];
        const minuto2 = dados.horarioFinal[3] + dados.horarioFinal[4];

        if (dados.tipo === 'ORDINARIA') {
          this.tipo = { label: '  Ordinária', value: { id: 1, name: 'ORDINARIA' } };
        } else if (dados.tipo === 'EXTRAORDINARIA') {
          this.tipo = { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } };
        }
        this.reuniao.itensDePauta = dados.itensDePauta;
        this.data = new Date(ano, mes, dia);
        console.log("essa data aqui"+this.data);
        this.horaInicio = new Date(null, null, null, hora, minuto);
        this.horaFim = new Date(null, null, null, hora1, minuto2);
      })
      .catch(erro =>
        alert(erro)
        // this.toasty.error(erro)
      );
  }
  excluirItem(item: Item) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reuniao.itensDePauta.length; i++) {
      if (this.reuniao.itensDePauta[i] === item) {
        this.reuniao.itensDePauta.splice(i, 1);
        this.mensagem.success('Item excluido com sucesso.');
      }
    }
  }

  adicionarItem(item: any) {
    this.reuniao.itensDePauta.push(item);
  }

  showDialog() {
    // this.filter.estado = 'FORADEPAUTA';
    this.itemService.pesquisar(this.filter)
      .then(response => {
        this.itens = response.content;
      });
    this.display = !this.display;
  }

}
