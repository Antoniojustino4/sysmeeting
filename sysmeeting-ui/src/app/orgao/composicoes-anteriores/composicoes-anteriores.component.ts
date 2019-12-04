import { MensagemService } from './../../core/mensagem.service';
import { Orgao } from './../../core/service/membro.service';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { NdeService } from '../../core/service/nde.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Grupo {
  nome: string;
}

@Component({
  selector: 'app-composicoes-anteriores',
  templateUrl: './composicoes-anteriores.component.html',
  styleUrls: ['./composicoes-anteriores.component.css']
})
export class ComposicoesAnterioresComponent implements OnInit {

  items: MenuItem[];
  orgao = new Orgao();
  grupo: SelectItem[];
  selectedGrupo: Grupo[];

  constructor(
    private ndeService: NdeService,
    private mensagem: MensagemService,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.orgao.id = this.route.snapshot.params.id;
    this.consultarNDE();
    this.items = [
      { label: 'Atribuições' },
      { label: 'Composições Anteriores' }
    ];
    this.grupo = [
      { label: '2019', value: { id: 1, name: '2018' } },
      { label: '2018', value: { id: 2, name: '2019' } },
    ];
  }

  consultarNDE(): any {
    this.ndeService.consultarPeloId(this.orgao.id)
      .then(dados => {
        this.orgao = dados;
      })
      .catch(erro => {
        this.mensagem.error(erro);
      });
  }




}
