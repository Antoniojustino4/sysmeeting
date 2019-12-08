import { MensagemService } from './../../core/mensagem.service';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { ToastyService } from 'ng2-toasty';
import { MenuItem, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../gerenciar-item/gerenciar-item.component';


class Reuniao {
  modalidade: string;
  tipo: string;
  data: string;
  horaInicio: string;
  horaFim: string;
}

class ReuniaoFilter {
  anos;
  mes;
  orgao;
}

@Component({
  selector: 'app-calendario-reuniao-membro',
  templateUrl: './calendario-reuniao-membro.component.html',
  styleUrls: ['./calendario-reuniao-membro.component.css']
})
export class CalendarioReuniaoMembroComponent implements OnInit {

  private itens: MenuItem[];
  reuniao = new Reuniao();
  reunioes = [];
  display = false;
  cols: any[];
  private meses: SelectItem[];
  private anos: SelectItem[];
  private orgao: SelectItem[];
  breadcrumb = [];
  item = new Item();
  reuniaoFilter = new ReuniaoFilter();

  constructor(
    private reuniaoService: ReuniaoService,
    private itemDePautaService: ItemDePautaService,
    private router: Router,
    private mensagem: MensagemService) {
  }

  ngOnInit() {
    this.consulta();

    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgao', url: '/orgoes' },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-membro' }
    ];
    this.cols = [
      { field: 'data', header: 'Data' },
      { field: 'tipo', header: 'Tipo de Reunião' },
      { field: 'estado', header: 'Estado' }

    ];
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
    this.orgao = [
      { label: 'Selecione', value: null },
      { label: 'Colegiado', value: { id: 1, name: 'COLEGIADO' } },
      { label: 'NDE', value: { id: 2, name: 'NDE' } }

    ];
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Orgão', url: '' },
    { label: 'Agenda de Reuniões', url: '' }
    ];
  }
  showDialog() {
    this.display = !this.display;
  }
  adicionar() {
    this.item.estado = 'SUGERIDO';
    this.itemDePautaService.sugerir(this.item)
      .then(() =>
        this.mensagem.success('Item de Pauta adicionado com sucesso.')
      )
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  consulta() {
    this.reuniaoService.consultar()
    .then(response => {
      this.reunioes = response;
    }).catch(erro =>
      this.mensagem.error(erro)
    );
  }

  pesquisar() {
    this.reuniaoService.pesquisar(this.reuniaoFilter)
      .then(dados => {
        console.log(dados);
      }).catch(erro =>
        this.mensagem.error(erro)
      );
  }

}
