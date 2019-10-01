import { NgForm } from '@angular/forms';
import { MembroService } from './../membro.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  exibindoLogin: false;

}
