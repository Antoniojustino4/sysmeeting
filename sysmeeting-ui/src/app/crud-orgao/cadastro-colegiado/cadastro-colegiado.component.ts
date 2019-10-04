import { CrudOrgaoModule } from './../crud-orgao.module';
import { ColegiadoService } from './../../service/colegiado.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-colegiado',
  templateUrl: './cadastro-colegiado.component.html',
  styleUrls: ['./cadastro-colegiado.component.css']
})
export class CadastroColegiadoComponent implements OnInit {

  isAdmin = true;

  // constructor(private crudOrgaoModule: CrudOrgaoModule) {}

  ngOnInit() {
  }

  // adicionarColegiado(form: NgForm) {
  //   this.crudOrgaoModule.adicionarColegiado(form);
  // }

}
