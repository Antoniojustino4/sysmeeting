import { Reuniao } from './../form-reuniao/form-reuniao.component';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ActivatedRoute } from '@angular/router';

class Item {
  descricao: string;
}


@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  private itens: MenuItem[];
  display = false;
  status: SelectItem[];
  items: [];
  item = new Item();
  id: Reuniao;

  constructor(private itemDePautaService: ItemDePautaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.reuniao;
    this.route.params.subscribe(reuniao => console.log(reuniao));
    console.log(this.id);
    this.pesquisar();
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Campus e Cursos', url: '' },
    { label: 'Orgão', url: '' },
    { label: 'Itens de Pauta', url: '' }
    ];
    this.status = [{ label: 'Selecione', value: null },
    { label: '  Sugerido ', value: { id: 1, name: 'SUGERIDO' } },
    { label: ' Encaminhado', value: { id: 2, name: 'ENCAMINHADO' } }];
  }

  showDialog() {
    this.display = !this.display;
  }

  adicionar() {
    this.itemDePautaService.adicionar(this.item);
  }

  pesquisar(pagina = 0) {
    this.itemDePautaService.consultar()
      .then(dados => {
        this.items = dados;
      });
  }

  idNull(): boolean {
    return this.id === null;
  }

  adicionarItem() {

  }
}
