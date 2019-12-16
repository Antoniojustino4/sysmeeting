import { MensagemService } from './../../core/mensagem.service';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

class Item {
  descricao: string;
  assunto: string;
}
class Orgao {
  membros: any[];
}
class Ata{
  reuniao: Reuniao;
  numero;
  dataDaPublicacao;
  membros: any[];
  foto: any;
}
class Reuniao {
  modalidade: string;
  tipo: string;
  data: string;
  horarioInicio: string;
  horarioFinal: string;
  itensDePauta: any[];
  idReuniao;
  orgao;
}
@Component({
  selector: 'app-edicao-ata',
  templateUrl: './edicao-ata.component.html',
  styleUrls: ['./edicao-ata.component.css']
})
export class EdicaoAtaComponent implements OnInit {

  essamerda: MenuItem[];
  items: MenuItem[];
  orgao: Orgao;
  reuniao: Reuniao;
  itens: any;
  idOrgao;
  id;
  ata : Ata;
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
  }
  carregarDadosDaReuniao(id: number) {
    this.reuniaoService.consultarPeloId(id)
    .then((dados) => {
      this.reuniao = dados;
      this.orgao = this.reuniao.orgao;
     // this.orgao.membros = this.reuniao.orgao.membros;

    })
    .catch(erro =>
      this.mensagem.error(erro)
    );
}
upload($event) {
 this.ata.foto==event.target;
}
gerarAta(){

}
}

