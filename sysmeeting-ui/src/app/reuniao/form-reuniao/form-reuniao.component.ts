import { ReuniaoService } from './../../core/service/reuniao.service';
import { ItemService } from './../../core/service/item.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { NgForm, Form } from '@angular/forms';

class Reuniao {
  modalidade: string;
  tipo: string;
  data: string;
  horaInicio: string;
  horaFim: string;
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



  constructor(private reuniaoService: ReuniaoService) {
    this.tipoReuniao = [
      { label: '  Ordinária', value: { id: 1, name: ' ORDINARIA' } },
      { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];
    this.cols = [
      { field: 'item.descricao', header: 'Item' }
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
    this.reuniaoService.adicionar(this.reuniao);

  }

  excluirItem(item: Item) {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i] === item) {
        this.itens.splice(i);
      }
    }
  }

  showDialog() {
    this.display = !this.display;
  }
}
