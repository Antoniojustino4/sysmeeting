import { NgForm } from '@angular/forms';
import { MensagemService } from './../../core/mensagem.service';
import { ToastyService } from 'ng2-toasty';
import { Reuniao } from './../cadastro-reuniao/cadastro-reuniao.component';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ActivatedRoute } from '@angular/router';

export class Item {
  estado;
  assunto: string;
  descricao: string;
  id: number;
  orgao: any;
}

export class ItemFilter {
  assunto: string;
  estado: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Component({
  selector: 'app-gerenciar-item',
  templateUrl: './gerenciar-item.component.html',
  styleUrls: ['./gerenciar-item.component.css']
})
export class GerenciarItemComponent implements OnInit {


  private itens: MenuItem[];
  display = false;
  display2 = false;
  status: SelectItem[];
  items: [];
  item = new Item();
  id: Reuniao;
  breadcrumb = [];
  titulo: string;
  texto: string;
  totalRegistros = 0;
  filtro = new ItemFilter();
  estado: any;
  idOrgao;
  orgao;
  orgaoNDE: any;
  orgaoColegiado: any;

  constructor(
    private itemDePautaService: ItemDePautaService,
    private route: ActivatedRoute,
    private mensagem: MensagemService) { }

  ngOnInit() {
    this.idOrgao = this.route.snapshot.params.id;
    this.orgao = this.route.snapshot.params.orgao;

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

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  showDialog() {
    this.display = !this.display;
    this.titulo = 'Cadastramento de item';
    this.item = new Item();
  }

  mostrarDialogo() {
    this.display2 = !this.display2;
  }

  adicionar(form: NgForm) {
    if (form.valid) {
      if (this.item.id === undefined) {
        this.texto = 'adicionado';
      } else {
        this.texto = 'editado';
      }
      this.itemDePautaService.adicionar(this.item, this.idOrgao, 'colegiado')
        .then(() => {
          this.display = false;
          this.mensagem.success('Item de Pauta ' + this.texto + ' com sucesso.');
          this.showDialog();
          this.pesquisar();
        }
        )
        .catch(erro =>
          this.mensagem.error(erro)
        );
    }
  }

  editar(id) {
    this.itemDePautaService.atualiza(id)
      .then((dados) => {
        this.item = dados;
        this.display = true;
        this.pesquisar();
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }
  pesquisar(pagina = 0) {
    if (this.estado) {
      this.filtro.estado = this.estado.value.name;
    }
    this.itemDePautaService.pesquisar(this.filtro)
      .then(dados => {
        this.items = dados.content;
        this.totalRegistros = dados.totalElements;
      })
      .catch(erro => null

      );
  }
  enquadrar( id: any ) {

  this.itemDePautaService.atualiza(id)
  .then((dados) => {
       if ( this.orgaoNDE === 'undefined') {
         this.item.orgao = 'Colegiado';
       }
       if ( this.orgaoColegiado === 'undefined') {
         this.item.orgao = 'NDE';
       }
       this.item = dados;
       this.display2 = true;
       this.pesquisar();
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
}
}

