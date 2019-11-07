import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { NgForm, Form } from '@angular/forms';
import { Time } from '@angular/common';

export class Reuniao {
  tipo: string;
  data: string;
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
  horaInicio: Date;
  horaFim: Date;
  id;
  router: Router;

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
    this.id = this.route.snapshot.params.id;
    this.consultarId();
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

  consultarId() {
    this.reuniaoService.consultarPeloId(this.id).then(dados => {
      this.reuniao = dados;
      this.data = new Date(this.reuniao.data);
      this.horaInicio = new Date(this.reuniao.data + this.reuniao.horarioInicio);
      console.log(this.horaInicio);
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
