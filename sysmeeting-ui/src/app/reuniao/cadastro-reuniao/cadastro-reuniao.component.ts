import { ToastyService } from 'ng2-toasty';
import { ItemDePautaService } from './../../core/service/item-de-pauta.service';
import { ReuniaoService } from './../../core/service/reuniao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';

export class Reuniao {
  id: string;
  tipo: string;
  data: string;
  horarioInicio: string;
  horarioFinal: string;
  itensDePauta = [];
}
class Item {
  descricao: string;
}
@Component({
  selector: 'app-cadastro-reuniao',
  templateUrl: './cadastro-reuniao.component.html',
  styleUrls: ['./cadastro-reuniao.component.css']
})
export class CadastroReuniaoComponent implements OnInit {
  private items: MenuItem[];
  tipoReuniao: SelectItem[];
  value: Date;
  display = false;
  reuniao = new Reuniao();
  cols: any[];
  item = new Item();
  tipo: string;
  breadcrumb = [];


  pt: any;
  itens = [];
  data: Date;
  horaInicio: Date;
  horaFim: Date;

  constructor(
    private reuniaoService: ReuniaoService,
    private itemService: ItemDePautaService,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.carregarDados(id);
    }

    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' },
      { label: 'Órgao', url: '/orgoes' },
      { label: 'Calendário', url: '/orgoes/calendario-reuniao-pre' },
      { label: 'Cadastro de Reunião', url: '/orgoes/cadastro-reuniao' },
    ];


    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
    this.tipoReuniao = [
      { label: '  ORDINARIA', value: { id: 1, name: 'ORDINARIA' } },
      { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];
    this.cols = [
      { field: 'descricao', header: 'Item' }
    ];
    this.items = [{
      label: 'Página Principal', url: 'http://localhost:4200/'
    }, {
      label: 'Órgão do Curso', url: 'http://localhost:4200/'
    },
    { label: 'Cadastro de Reunião', url: '' }
    ];
  }
  adicionarReuniao() {
    this.reuniao.tipo = 'EXTRAORDINARIA';
    this.reuniao.data = this.data.toLocaleDateString();
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.horarioInicio = this.horaInicio.getHours() + ':' + this.horaInicio.getMinutes() + ':' + this.horaInicio.getSeconds();
    this.reuniao.horarioFinal = this.horaFim.getHours() + ':' + this.horaFim.getMinutes() + ':' + this.horaFim.getSeconds();

    this.reuniaoService.adicionar(this.reuniao)
      .then(() => {
        this.toasty.success('Reunião adicionada com sucesso.');
        this.reuniao = new Reuniao();
        this.router.navigate(['reunioes', 'calendario-reuniao-membro']);
      })
      .catch(erro =>
        this.toasty.error(erro)
      );
  }

  atualizar() {
    this.reuniao.data = this.data.toLocaleDateString();
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.data = this.reuniao.data.replace('/', '-');
    this.reuniao.horarioInicio = this.horaInicio.getHours() + ':' + this.horaInicio.getMinutes() + ':' + this.horaInicio.getSeconds();
    this.reuniao.horarioFinal = this.horaFim.getHours() + ':' + this.horaFim.getMinutes() + ':' + this.horaFim.getSeconds();
    console.log(this.reuniao);
    this.reuniaoService.atualizar(this.reuniao)
      .then(() =>
        this.toasty.success('Reunião atualizada com sucesso.')
      )
      .catch(erro =>
        this.toasty.error(erro)
      );
  }
  salvar() {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionarReuniao();
    }
  }

  get editando() {
    return Boolean(this.reuniao.id);
  }
  carregarDados(id) {
    this.reuniaoService.consultarPeloId(id)
      .then(dados => {
        this.reuniao = dados;
        let d = this.reuniao.data;
        d = d.replace('-', '/');
        d = d.replace('-', '/');
        this.data = new Date(d);
        this.tipo = this.reuniao.tipo;
        console.log(d);
        // const o = this.reuniao.horarioInicio.replace(':', ''); // Troca hifen por barra


        // console.log(formatDate(this.reuniao.horarioInicio, 'hh:mm', ''));
      })
      .catch(erro =>
        this.toasty.error(erro)
      );
  }
  excluirItem(item: Item) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reuniao.itensDePauta.length; i++) {
      if (this.reuniao.itensDePauta[i] === item) {
        this.reuniao.itensDePauta.splice(i, 1);
        this.toasty.success('Item excluido com sucesso.');
      }
    }
  }

  adicionarItem(item: any) {
    this.reuniao.itensDePauta.push(item);
  }

  showDialog() {
    this.itemService.consultar()
      .then(response => {
        this.itens = response;
      });
    this.display = !this.display;
  }

}
