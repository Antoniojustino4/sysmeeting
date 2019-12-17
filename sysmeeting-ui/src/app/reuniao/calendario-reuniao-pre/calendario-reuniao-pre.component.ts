import { Reuniao } from './../../core/model';
import { ReuniaoFilter } from './../../core/filter';
import { MensagemService } from './../../core/mensagem.service';
import { ToastyService } from 'ng2-toasty';
import { MenuItem, SelectItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-calendario-reuniao-pre',
  templateUrl: './calendario-reuniao-pre.component.html',
  styleUrls: ['./calendario-reuniao-pre.component.css']
})
export class CalendarioReuniaoPreComponent implements OnInit {

  reuniao = new Reuniao();
  reunioes = [];
  cols: any[];
  private meses: SelectItem[];
  private anos: SelectItem[];
  breadcrumb = [];
  display = false;
  displayReagendar = false;
  displayCancelar = false;
  pt: any;
  data: Date;
  id;
  orgao;
  reuniaoFilter = new ReuniaoFilter();

  constructor(
    private reuniaoService: ReuniaoService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagem: MensagemService) {
  }

  ngOnInit() {
    this.orgao = this.route.snapshot.params.orgao;
    this.id = this.route.snapshot.params.id;
    this.consultar();
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgao', url: '/orgaos/' + this.orgao + '/' + this.id },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-pre' }
    ];
    this.cols = [
      { field: 'data', header: 'Data' },
      { field: 'tipo', header: 'Tipo de Reunião' },
      { field: 'estado', header: 'Estado' }

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
    this.meses = [
      { label: 'Selecione', value: null },
      { label: 'Janeiro', value: { id: 1, name: 'Janeiro' } },
      { label: 'Fevereiro', value: { id: 2, name: 'Fevereiro' } },
      { label: 'Março', value: { id: 3, name: 'Marco' } },
      { label: 'Abril', value: { id: 4, name: 'Abril' } },
      { label: 'Maio', value: { id: 5, name: 'Maio' } },
      { label: 'Junho', value: { id: 6, name: 'Junho' } },
      { label: 'Julho', value: { id: 7, name: 'Julho' } },
      { label: 'Agosto', value: { id: 8, name: 'Agosto' } },
      { label: 'Setembro', value: { id: 9, name: 'Setembro' } },
      { label: 'Outubro', value: { id: 10, name: 'Outubro' } },
      { label: 'Novembro', value: { id: 11, name: 'Novembro' } },
      { label: 'Dezembro', value: { id: 12, name: 'Dezembro' } }
    ];
    this.anos = [
      { label: 'Selecione', value: null },
      { label: '2018', value: { id: 1, name: '2018' } },
      { label: '2019', value: { id: 2, name: '2019' } },
      { label: '2020', value: { id: 3, name: '2020' } },
      { label: '2021', value: { id: 4, name: '2021' } },
      { label: '2022', value: { id: 5, name: '2022' } },
      { label: '2023', value: { id: 6, name: '2023' } },
      { label: '2024', value: { id: 7, name: '2024' } },
      { label: '2025', value: { id: 8, name: '2025' } }
    ];
  }

  consultar() {
    this.reuniaoService.consultar()
      .then(response => {
        this.reunioes = response;
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  pesquisar() {
    this.reuniaoService.pesquisar(this.reuniaoFilter)
      .then(dados => {
        this.reunioes = dados.content;
      }).catch(erro =>
        this.mensagem.error(erro)
      );
  }

  mostrarPauta(id: number) {
    this.reuniaoService.consultarPeloId(id)
      .then((dados) => {
        this.reuniao = dados;
        this.display = true;
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  reagendar(reuniao: Reuniao, salva: boolean) {
    console.log(reuniao);

    if (!salva) {
      this.reuniao = reuniao;
    }
    if (salva) {
      this.reuniao.data = moment(this.data).format('DD-MM-YYYY');
      this.reuniaoService.atualizar(this.reuniao)
        .then(() => {
          this.mensagem.success('Reunião reagendada com sucesso!');
        }).catch(erro => {
          this.mensagem.error(erro);
        });

    }
    this.displayReagendar = !this.displayReagendar;
  }

  cancelar(id: number) {
    this.displayCancelar = !this.displayCancelar;
  }
}
