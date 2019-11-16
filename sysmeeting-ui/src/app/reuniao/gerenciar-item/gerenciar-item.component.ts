import { Reuniao } from './../cadastro-reuniao/cadastro-reuniao.component';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ActivatedRoute } from '@angular/router';

class Item {
  descricao: string;
}
@Component({
  selector: 'app-gerenciar-item',
  templateUrl: './gerenciar-item.component.html',
  styleUrls: ['./gerenciar-item.component.css']
})
export class GerenciarItemComponent implements OnInit {

  private itens: MenuItem[];
  display = false;
  status: SelectItem[];
  items: [];
  item = new Item();
  id: Reuniao;
  breadcrumb = [];


  constructor(
    private itemDePautaService: ItemDePautaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.pesquisar();

    this.breadcrumb = [
      { label: 'Página Inicial' , url: '/', icon: 'pi pi-home'},
      { label: 'Órgao', url: '/orgoes' },
      { label: 'Gerenciar Itens de Pauta', url: '/orgoes/gerenciar-item' }
    ];
    this.itens = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Campus e Cursos', url: '' },
    { label: 'Orgão', url: '' },
    { label: 'Itens de Pauta', url: '' }
    ];
    this.status = [{ label: 'Selecione', value: null },
    { label: '  Sugerido ', value: { id: 1, name: 'SUGERIDO' } },
    { label: ' Analisando ', value: { id: 3, name: 'ANALISANDO' } },
    { label: ' Rejeitado', value: { id: 4, name: 'REJEITADO' } },
    { label: ' Enquadrado', value: { id: 5, name: 'ENQUADRADO' } },
    { label: ' Fora de pauta', value: { id: 6, name: 'FORADEPAUTA' } },
    { label: ' Encaminhado', value: { id: 7, name: 'ENCAMINHADO' } },
    { label: ' Finalizado', value: { id: 8, name: 'FINALIZADO' } },
    { label: ' Em pauta', value: { id: 9, name: 'EMPAUTA' } }
  ];
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
