import { CampusFilter } from './../../core/filter';
import { AuthService } from './../../seguranca/auth.service';
import { MensagemService } from './../../core/mensagem.service';
import { Router } from '@angular/router';
import { LazyLoadEvent, SelectItem, ConfirmationService } from 'primeng/api';
import { CursoService } from './../../core/service/curso.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import * as moment from 'moment';

@Component({
  selector: 'app-listagem-curso',
  templateUrl: './listagem-curso.component.html',
  styleUrls: ['./listagem-curso.component.css']
})
export class ListagemCursoComponent implements OnInit {

  cursos: [];
  filtro = new CampusFilter();
  breadcrumb = [];
  totalRegistros = 0;
  formacoes: SelectItem[];
  exibindoInf = false;
  tituloBotaoColegiado = 'Colegiado';
  tituloBotaoNde = 'NDE';

  linkColegiao;
  linkNDE;


  constructor(
    private cursoService: CursoService,
    private router: Router,
    private mensagem: MensagemService,
    private confirmation: ConfirmationService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.breadcrumb = [
      { label: 'Página Inicial', url: '/', icon: 'pi pi-home' }
    ];
    this.formacoes = [
      { label: 'Selecione', value: null },
      { label: '  TECNOLOGO ', value: { id: 1, name: 'TECNOLOGO' } },
      { label: ' BACHARELADO', value: { id: 2, name: 'BACHARELADO' } },
      { label: '  LICENCIATURA', value: { id: 3, name: 'LICENCIATURA' } }
    ];
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.cursoService.pesquisar(this.filtro)
      .then(dados => {
        this.cursos = dados.content;
        this.totalRegistros = dados.totalElements;
      }).catch(erro =>
        this.mensagem.error(erro)
      );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmar(curso: any, tipo: string) {
    this.confirmation.confirm({
      message: 'Não existe ' + tipo + ' cadastrado, deseja cadastrado?',
      accept: () => {
        if (tipo === 'Colegiado') {
          this.router.navigate(['/orgaos/colegiado-adm-novo', curso.id]);
        } else if (tipo === 'NDE') {
          this.router.navigate(['/orgaos/nde-adm-novo', curso.id]);
        }
      }
    });
  }

  orgaoColegiado(curso: any) {
    if (curso.orgoes.length !== 0) {
      this.router.navigate(['/orgaos/colegiado', curso.orgoes[0].id]);
    } else if (this.auth.temPermissao('ADMINISTRADOR')) {
      this.confirmar(curso, 'Colegiado');
    }
  }
  orgaoNde(curso: any) {
    if (curso.orgoes.length !== 1) {
      this.router.navigate(['/orgaos/nde', curso.orgoes[1].id]);
    } else if (this.auth.temPermissao('ADMINISTRADOR')) {
      this.confirmar(curso, 'NDE');
    }
  }

  botaoColegiado(curso: any) {
    if (this.auth.temPermissao('ADMINISTRADOR')) {
      return true;
    }
    let isColegiado = false;
    try {
      isColegiado = curso.orgoes[0].discenteQntdMin >= 1;
    } catch (e) {

    }
    if (isColegiado) {
      if (!this.auth.temPermissao('ADMINISTRADOR')) {
        return true;
      }
    }
    return false;
  }

  botaoNde(curso: any) {
    if (this.auth.temPermissao('ADMINISTRADOR')) {
      return true;
    }
    let isNde = false;
    try {
      if (curso.orgoes.length > 1) {
        const a = curso.orgoes[1].discenteQntdMin;
      }
    } catch (e) {
      isNde = true;
    }
    if (isNde) {
      if (!this.auth.temPermissao('ADMINISTRADOR')) {
        return true;
      }
    }
    return false;
  }

}
