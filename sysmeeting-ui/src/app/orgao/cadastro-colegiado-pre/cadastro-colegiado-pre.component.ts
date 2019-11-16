import { MembroService } from 'src/app/core/service/membro.service';
import { CadastroColegiadoAdmComponent } from './../cadastro-colegiado-adm/cadastro-colegiado-adm.component';
import { ColegiadoService } from './../../core/service/colegiado.service';
import { Membro, ContaDeAcesso, Tipo } from './../../core/service/membro.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectItem, LazyLoadEvent } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-colegiado-pre',
  templateUrl: './cadastro-colegiado-pre.component.html',
  styleUrls: ['./cadastro-colegiado-pre.component.css']
})
export class CadastroColegiadoPreComponent implements OnInit {

  display = false;
  tiposMembros: SelectItem[];
  selectTipoMembro: string[];
  id = 2;
  pt: any;
  membros = [];
  membro = new Membro();
  breadcrumb = [];

  constructor(
    private route: ActivatedRoute,
    private membroService: MembroService,
    private colegiadoService: ColegiadoService) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial' , url: '/', icon: 'pi pi-home'},
      { label: 'Órgão', url: '/orgoes' },
      { label: 'Composição', url: '/orgoes/composicao' },
      { label: 'Cadastro de Colegiado', url: '/orgoes/colegiado-adm-novo' }
    ];
    this.id = this.route.snapshot.params.id;
    // this.carregarDados();
    this.tiposMembros = [
      { label: 'Selecione', value: null },
      { label: '  Discente ', value: { id: 1, name: ' DISCENTE' } },
      { label: '  Docente ', value: { id: 2, name: ' DOCENTE' } },
      { label: '  Suplente Discente ', value: { id: 3, name: 'SUPLENTE_DISCENTE' } },
      { label: ' Técnico Administrativo Pedagogico', value: { id: 4, name: 'TECNICO_ADMINISTRATIVO_PEDAGOGICO' } },
      { label: ' Docente Externo', value: { id: 5, name: ' DOCENTE_EXTERNO' } },
      { label: '  Suplente Docente Externo ', value: { id: 6, name: 'SUPLENTE_DOCENTE_EXTERNO' } },
      { label: '  Suplente Técnico Administrativo Pedagogico', value: { id: 7, name: 'SUPLENTE_TECNICO_ADMINISTRATIVO_PEDAGOGICO' } },
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
  }

  associar(form: NgForm) {
    this.membro = new Membro();
    this.membro.contaAcesso = new ContaDeAcesso();
    this.membro.contaAcesso.email = form.value.email;
    this.membro.contaAcesso.senha = form.value.senha;
    this.membro.tipo = form.value.tipo.value.name;
    this.membros.push(this.membro);
    this.membroService.adicionar(this.membro);
    form.reset();
  }

  excluirMembro(membro: Membro) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.membros.length; i++) {
      if (this.membros[i].conta.email === membro.contaAcesso.email) {
        this.membros.splice(i, 1);
      }
    }
  }

  adicionarColegiado(form: NgForm) {
    this.colegiadoService.adicionar({
      vigenciaMandatoMeses: form.value.mesesDaVigencia,
      discenteQntdMax: form.value.qtdDiscentes,
      tecAdmQntdMax: form.value.qtdTecAdministrativos,
      vigenciaReconducaoMeses: form.value.mesesDeReconducao,
      docenteQntdMax: form.value.qtdDocentes,
      docenteExternoQntdMax: form.value.qtdDocentesExternos
    })
      .then(dado => {

      })
      .catch(erro => {
        alert(erro);
      });
  }

  showDialog() {
    this.display = !this.display;
  }
}
