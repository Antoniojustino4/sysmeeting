import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { NgForm, Form } from '@angular/forms';
import { Time } from '@angular/common';
import { Time, DatePipe, formatDate } from '@angular/common';

export class Reuniao {
  modalidade: string;
export class Reuniao {
  id: string;
  tipo: string;
  data: string;
  horaInicio: string;
  horaFim: string;
  itensDePauta = [];
  horarioInicio: string;
  horarioFinal: string;
  itensDePauta = [];
}
class Item {
  descricao: string;
}
@Component({
  selector: 'app-form-reuniao',
  templateUrl: './form-reuniao.component.html',
  styleUrls: ['./form-reuniao.component.css']
})
export class FormReuniaoComponent implements OnInit {
  private items: MenuItem[];
  tipoReuniao: SelectItem[];
  value: Date;
  display = false;
  reuniao = new Reuniao();
  cols: any[];
  item = new Item();

  itens = [];
  data: Date;
  horaInicio: Time;
  horaFim: Time;
  data: Date;
  horaInicio: Date;
  horaFim: Date;
  router: Router;

  router: Router;

  constructor(private reuniaoService: ReuniaoService, private itemService: ItemDePautaService) {
  constructor(private reuniaoService: ReuniaoService, private itemService: ItemDePautaService, private route: ActivatedRoute) {
    this.tipoReuniao = [
      { label: '  Ordinária', value: { id: 1, name: 'ORDINARIA' } },
      { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];
    this.cols = [
      { field: 'descricao', header: 'Item' }
    ];
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.carregarDados(id);
    }
    this.items = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    }, {
      label: 'Órgão do Curso', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Reunião', url: '' }
    ];
  }
  adicionarReuniao() {
    this.reuniao.data = this.data.toLocaleDateString();
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.horarioInicio = this.horaInicio.getHours() + ':' + this.horaInicio.getMinutes() + ':' + this.horaInicio.getSeconds();
    this.reuniao.horarioFinal = this.horaFim.getHours() + ':' + this.horaFim.getMinutes() + ':' + this.horaFim.getSeconds();
    console.log(this.reuniao);
    this.reuniaoService.adicionar(this.reuniao);
  }

  atualizar() {
    this.reuniao.data = this.data.toLocaleDateString();
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.horarioInicio = this.horaInicio.getHours() + ':' + this.horaInicio.getMinutes() + ':' + this.horaInicio.getSeconds();
    this.reuniao.horarioFinal = this.horaFim.getHours() + ':' + this.horaFim.getMinutes() + ':' + this.horaFim.getSeconds();
    console.log(this.reuniao);
    this.reuniaoService.atualizar(this.reuniao);
  }
  salvar() {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionarReuniao();
    }
  }

  get editando() {
    return Boolean(this.reuniao.id);
  }
  carregarDados(id) {
    this.reuniaoService.consultarPeloId(id).then(dados => {
      this.reuniao = dados;
      this.data = new Date(this.reuniao.data);

      // const o = this.reuniao.horarioInicio.replace(':', ''); // Troca hifen por barra


      // console.log(formatDate(this.reuniao.horarioInicio, 'hh:mm', ''));
    });
  }
  excluirItem(item: Item) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reuniao.itensDePauta.length; i++) {
      if (this.reuniao.itensDePauta[i] === item) {
        this.reuniao.itensDePauta.splice(i, 1);
      }
    }
  }

  adicionarItem(item: any) {
    this.reuniao.itensDePauta.push(item);
  }

  showDialog() {
    this.itemService.consultar()
      .then(response => {
        this.itens = response;
      });
    this.display = !this.display;
  }

}
