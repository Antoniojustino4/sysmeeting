import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-nde-adm',
  templateUrl: './cadastro-nde-adm.component.html',
  styleUrls: ['./cadastro-nde-adm.component.css']
})
export class CadastroNdeAdmComponent implements OnInit {

  display = false;

  constructor() { }

  ngOnInit() {
  }


  showDialog() {
    this.display = !this.display;
  }

}
