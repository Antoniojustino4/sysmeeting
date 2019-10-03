import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/api';
import { NgForm, Form } from '@angular/forms';
class Reuniao {
  tipo: string;
  data: string;
  hora_in: string;
  hora_fim: string;
}
@Component({
  selector: 'app-form-reuniao',
  templateUrl: './form-reuniao.component.html',
  styleUrls: ['./form-reuniao.component.css']
})
export class FormReuniaoComponent implements OnInit {
  tipoReuniao: SelectItem[];
  value: Date;
  display = false;
  reuniao = new Reuniao();
  constructor() {
    this. tipoReuniao = [
      { label: '  Ordinária', value: { id: 1, name: ' ORDINARIA' } }, { label: ' Extraordinária', value: { id: 2, name: 'EXTRAORDINARIA' } }
    ];

   }

  ngOnInit() {
  }
  adicionarReuniao(form: NgForm) {
    this.reuniao.tipo = form.value.tipo;
    this.reuniao.data = form.value.data;
    this.reuniao.hora_in = form.value.horainicio;
    this.reuniao.hora_fim = form.value.horafim;
    // this.cursos.push(this.curso);
    // this.campus.cursos = this.cursos;
  }



  showDialog() {
    this.display = !this.display;
  }
}
