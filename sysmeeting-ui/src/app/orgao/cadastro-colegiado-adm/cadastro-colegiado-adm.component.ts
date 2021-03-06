import { Colegiado } from './../../core/service/colegiado.service';
import { Membro, ContaDeAcesso } from './../../core/service/membro.service';
import { ColegiadoService } from '../../core/service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MembroService } from 'src/app/core/service/membro.service';


@Component({
  selector: 'app-cadastro-colegiado-adm',
  templateUrl: './cadastro-colegiado-adm.component.html',
  styleUrls: ['./cadastro-colegiado-adm.component.css']
})
export class CadastroColegiadoAdmComponent {

  display = false;
  membro = new Membro();
  colegiados: Colegiado[];
  conta = new ContaDeAcesso();
  membros: Membro[];

  constructor(private colegiadoService: ColegiadoService, private membroService: MembroService) { }

  // adicionarColegiado(form: NgForm) {
  //   this.colegiadoService.adicionar({
  //     nome: form.value.nome, turno: form.value.turno, modalidade: form.value.modalidade,
  //     formacao: form.value.formacao
  //   })
  //     .then(dado => {

  //     })
  //     .catch(erro => {
  //       alert(erro);
  //     });
  // }


  vincularPresidenteAoOrgao() {
    const membro = new Membro();
    membro.contaAcesso = this.conta;
    this.membroService.adicionar(membro);
  }

  showDialog(a: boolean) {
    if (a) {
      this.display = !this.display;
    }
  }

}
