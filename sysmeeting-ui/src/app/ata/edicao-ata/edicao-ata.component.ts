import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { Membro, Item, RegistroTextual,Ata } from './../../core/model';
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
  orgao;
  reuniao = new  Reuniao();
  itens: any;
  idOrgao;
  id;
  breadcrumb = [];
  display = false;
  item: Item;
  registro: RegistroTextual;
  texto: string;
  ata:Ata;
  membrosPresentes: [];
  constructor(
    private reuniaoService: ReuniaoService,
    private itemDePautaService: ItemDePautaService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagem: MensagemService
  ) { }
  ngOnInit() {
    this.idOrgao = this.route.snapshot.params.idOrgao;
    this.id = this.route.snapshot.params["id"];
    this.carregarDadosDaReuniao();
    this.items = [
      { label: 'Registro', icon: 'fa fa-fw fa-bar-chart' }
      // ,{ label: 'Atividades', icon: 'fa fa-fw fa-calendar' }
    ];
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Orgao', url: '/' + this.orgao + '/' + this.idOrgao },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-pre' },
      { label: 'Ata', url: '' }
    ];
  }
  carregarDadosDaReuniao() {
    this.reuniaoService.consultarPeloId(this.id)
      .then((dados) => {
        this.reuniao = dados;
        this.orgao = this.reuniao.orgao;
        console.log(this.reuniao.orgao.membros);

      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }

  showDialog() {
    this.reuniaoService.consultarPeloId(this.id)
      .then((dados) => {
        this.reuniao = dados;
        console.log(this.reuniao);
        this.display = !this.display;
      })
      .catch(erro =>
        this.mensagem.error(erro)
      );
  }
  adicionarMembro(membro: any) {
    this.reuniao.membrosPresentes.push(membro);
  }
  excluirMembro(item: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reuniao.membrosPresentes.length; i++) {
      if (this.reuniao.membrosPresentes[i] === item) {
        this.reuniao.membrosPresentes.splice(i, 1);
        this.mensagem.success('membro removido da ata com sucesso.');
      }
    }
  }
  finalizarItem() {
    this.reuniaoService.consultarPeloId(this.id);
    this.registro = new RegistroTextual();
    this.itens.registroTextual = this.registro;
    this.registro.texto = this.texto;
    //this.item.registroTextual = RegistroTextual[99];
    this.item.registroTextual.push(this.registro);
    console.log(this.texto);
  }
  salvarAta() {
    this.ata.reuniao = this.reuniao;
    this.ata.itensDePauta = this.reuniao.itensDePauta;
    this.ata.membros = this.reuniao.membrosPresentes;
    this.reuniaoService.consultarPeloId(this.id)
    .then((dados) => {
      this.reuniao = dados;
      console.log("abc" + this.reuniao.orgao);
    })
    .catch(erro =>
      this.mensagem.error(erro)
      );
    this.reuniaoService.atualizar(this.reuniao);
  }
}
