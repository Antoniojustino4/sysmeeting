import { ToastyService } from 'ng2-toasty';
import { Reuniao } from './../cadastro-reuniao/cadastro-reuniao.component';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ActivatedRoute } from '@angular/router';

export class Item {
  estado;
  assunto: string;
  descricao: string;
  id: number;

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
  titulo: String;
  texto:String;
  constructor(
    private itemDePautaService: ItemDePautaService,
    private route: ActivatedRoute,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.pesquisar();

    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
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
    this.titulo = "Cadastramento de item";
    this.item = new Item();
  }
  adicionar() {
    console.log(this.item.id);

    if(this.item.id===undefined){
      this.texto = "adicionado";

    }
    else{
      this.texto = "editado";

    }
    this.itemDePautaService.adicionar(this.item)
    .then(() => {
      this.display = false;
        this.toasty.success('Item de Pauta '+ this.texto +' com sucesso.');
        this.pesquisar();
      }
      )
      .catch(erro =>
        this.toasty.error(erro)
      );
  }
  editar(id) {

    this.itemDePautaService.atualiza(id)

    .then((dados) => {
      this.item = dados;
        this.display = true;
        this.pesquisar();

      }
      )
      .catch(erro =>
        this.toasty.error(erro)
      );
  }
  pesquisar(pagina = 0) {
    this.itemDePautaService.consultar()
      .then(dados => {
        this.items = dados;
        console.log(dados);
      })
      .catch(erro =>
        this.toasty.error(erro)
      );
  }

}
