import { ReuniaoService } from './../../core/service/reuniao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from './../../core/mensagem.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import { Orgao, Reuniao } from 'src/app/core/model';

@Component({
  selector: 'app-edicao-ata',
  templateUrl: './edicao-ata.component.html',
  styleUrls: ['./edicao-ata.component.css']
})
export class EdicaoAtaComponent implements OnInit {

  essamerda: MenuItem[];
  items: MenuItem[];
  cols: any[];
  cursos = [];
  orgao: Orgao;
  reuniao: Reuniao;
  itens: any;
  idOrgao;
  id;
  breadcrumb= [];
  constructor(
    private reuniaoService: ReuniaoService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagem: MensagemService
  ) { }
  ngOnInit() {
    this.idOrgao = this.route.snapshot.params.idOrgao;
    this.id = this.route.snapshot.params.id;
    this.carregarDadosDaReuniao(this.id);
    this.items = [
      { label: 'Registro', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Atividades', icon: 'fa fa-fw fa-calendar' }
    ];
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
       { label: 'Orgao', url: '/' + this.orgao + '/' + this.idOrgao },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-pre' },
      {label: 'Ata', url: '' }
    ];
  }
  carregarDadosDaReuniao(id: number) {
    this.reuniaoService.consultarPeloId(id)
    .then((dados) => {
      this.reuniao = dados;
      this.orgao = this.reuniao.orgao;
      this.orgao.membros = this.reuniao.orgao.membros;

    })
    .catch(erro =>
      this.mensagem.error(erro)
    );
}
}
