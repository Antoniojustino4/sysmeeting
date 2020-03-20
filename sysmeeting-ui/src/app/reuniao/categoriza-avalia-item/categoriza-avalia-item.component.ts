import { MensagemService } from './../../core/mensagem.service';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/model';

@Component({
  selector: 'app-categoriza-avalia-item',
  templateUrl: './categoriza-avalia-item.component.html',
  styleUrls: ['./categoriza-avalia-item.component.css']
})
export class CategorizaAvaliaItemComponent implements OnInit {

  id;
  idOrgao;
  orgao;
  item: Item;
  breadcrumb = [];
  orgaos: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemDePautaService,
    private mensagem: MensagemService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.idOrgao = this.route.snapshot.params.id;
    this.orgao = this.route.snapshot.params.orgao;

    this.consultar();
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgao', url: '/orgaos/' + this.orgao + '/' + this.idOrgao },
      { label: 'Gerenciar Itens de Pauta', url: '/orgoes/gerenciar-item' },
      { label: 'Enquadrar Item' }
    ];
    this.orgaos = [{ label: 'Selecione', value: null },
    { label: ' Colegiado ', value: { id: 1, name: 'COLEGIADO' } },
    { label: ' NDE ', value: { id: 2, name: 'NDE' } }];
  }

  consultar() {
    this.itemService.consultarPeloId(this.id)
    .then(response => {
      this.item = response;
      console.log(response);

    })
    .catch(erro =>
      this.mensagem.error(erro)
    );
  }

}
