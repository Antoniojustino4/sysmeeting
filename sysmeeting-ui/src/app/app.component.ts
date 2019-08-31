import { ContaDeAcessoService } from './conta-de-acesso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private contaDeAcessoService: ContaDeAcessoService) {}

  ngOnInit() {
    this.contaDeAcessoService.consultar();
  }
}
