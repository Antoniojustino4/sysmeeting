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
  orgao;
  grupo: SelectItem[];
  selectedGrupo: Grupo[];

  constructor(
    private ndeService: NdeService,
    private toasty: ToastyService) {

  }

  consultarNDE(): any {
    this.ndeService.consultarPeloId(24)
      .then(dados => {
        this.orgao = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  ngOnInit() {
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


}
