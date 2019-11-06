import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

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

  constructor(private itemDePautaService: ItemDePautaService) { }

  ngOnInit() {
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

}
