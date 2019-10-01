import { ColegiadoService } from './../../service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

class Orgao {
  inicioDeVigencia: Date;
  mesesDaVigencia: number;
  qtdDiscentes: number;
  qtdTecAdministrativos: number;
  portaria: number;
  mesesDeReconducao: number;
  qtdDocentes: number;
  qtdDocentesExternos: number;
  regulamento: number;
  membros: Membro[];
}

class Membro {
  nome: string;
  email: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
}

@Component({
  selector: 'app-cadastro-colegiado',
  templateUrl: './cadastro-colegiado.component.html',
  styleUrls: ['./cadastro-colegiado.component.css']
})
export class CadastroColegiadoComponent implements OnInit {

  orgaos: Orgao[];

  constructor(private colegiadoService: ColegiadoService) { }

  ngOnInit() {
  }

  adicionar(form: NgForm) {
    this.colegiadoService.adicionar({
      nome: form.value.nome, turno: form.value.turno, modalidade: form.value.modalidade,
      formacao: form.value.formacao
    })
      .then(dado => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }
  consultar() {
    this.colegiadoService.consultar()
      .then(dados => {
        this.orgaos = dados;
      })
      .catch(erro => {
        alert(erro);
      });
  }

  excluir(id: number) {
    this.colegiadoService.excluir(id)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }

  atualizar(orgao: any) {
    this.colegiadoService.atualizar(orgao)
      .then(() => {
        this.consultar();
      })
      .catch(erro => {
        alert(erro);
      });
  }


}
