import { MembroService } from 'src/app/core/service/membro.service';
import { ContaDeAcesso, Membro } from './../../core/service/membro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-nde-adm',
  templateUrl: './cadastro-nde-adm.component.html',
  styleUrls: ['./cadastro-nde-adm.component.css']
})
export class CadastroNdeAdmComponent implements OnInit {

  display = false;
  conta = new ContaDeAcesso();

  constructor(private membroService: MembroService) { }

  ngOnInit() {

  }

  vincularPresidenteAoOrgao() {
    const membro = new Membro();
    membro.contaAcesso = this.conta;
    this.membroService.adicionar(membro);
  }

  showDialog() {
    this.display = !this.display;
  }

}
