import { ColegiadoService } from '../../core/service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MembroService } from 'src/app/core/service/membro.service';

class Membro {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
  conta: ContaDeAcesso;
}

class ContaDeAcesso {
  email: string;
}

class Colegiado {
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

@Component({
  selector: 'app-cadastro-colegiado-adm',
  templateUrl: './cadastro-colegiado-adm.component.html',
  styleUrls: ['./cadastro-colegiado-adm.component.css']
})
export class CadastroColegiadoAdmComponent {

  display = false;
  membro = new Membro();
  colegiados: Colegiado[];

  membros: Membro[];

  // constructor(private colegiadoService: ColegiadoService, private membroService: MembroService) { }

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


  vincularPresidenteAoOrgao(form: NgForm) {
    this.membro.conta = new ContaDeAcesso();
    this.membro.conta.email = form.value.email;
  }

  showDialog(a: boolean) {
    if (a) {
      this.display = !this.display;
    }
  }

}
