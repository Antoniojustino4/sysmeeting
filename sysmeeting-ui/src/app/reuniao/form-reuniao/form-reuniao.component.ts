import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { Router } from '@angular/router';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { NgForm, Form } from '@angular/forms';
import { Time } from '@angular/common';

export class Reuniao {
  modalidade: string;
  tipo: string;
  data: string;
  horaInicio: string;
  horaFim: string;
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

  router: Router;

  constructor(private reuniaoService: ReuniaoService, private itemService: ItemDePautaService) {
    this.tipoReuniao = [
      { label: '  Ordinária', value: { id: 1, name: ' ORDINARIA' } },
      { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];
    this.cols = [
      { field: 'descricao', header: 'Item' }
    ];
  }

  ngOnInit() {
    this.items = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    }, {
      label: 'Órgão do Curso', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Reunião', url: '' }
    ];
  }
  adicionarReuniao() {
    this.reuniao.data= this.data.toLocaleDateString();
    this.reuniaoService.adicionar(this.reuniao);
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
