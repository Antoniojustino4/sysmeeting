import { CursoService } from './../service/curso.service';
import { SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  inst: SelectItem[];
  formacao: SelectItem[];
  selectInst: string[];
  selectForm: string[];
  private items: MenuItem[];
  url = 'http://localhost:4200/';
  menu: MenuItem[];



  constructor() { }

  ngOnInit() {
    this.inst = [
      { label: '  IFPB-Campus Monteiro', value: { id: 1, name: ' IFPB Monteiro' } }
    ];
    this.formacao = [
      { label: 'Licenciatura', value: { id: 1, name: 'Licenciatura' } },
      {
        label:
          'Tecnológica', value: { id: 2, name: ' Tecnologica' }
      },
      {
        label:
          ' Bacharelado', value: { id: 3, name: ' Bacharelado' }
      }
    ];
    this.menu = [
      {
        label: 'Campus e Curso',
        items: [
          {
            label: 'Listagem Campus e Curso',
            url: '/'
          },
          {
            label: 'Criar Campus e Curso',
            url: '/cadastrar'
          }
        ]
      },
      {
        label: 'Ata',
        items: [
          {
            label: 'Edição de Ata',
            url: 'atas/'
          }
        ]
      },
      {
        label: 'Orgão',
        items: [
          {
            label: 'Composição Colegiado',
            url: 'orgaos/colegiado'
          },
          {
            label: 'Criar Colegiado ADM',
            url: 'orgaos/colegiado-adm-novo'
          },
          {
            label: 'Criar Colegiado Presidente',
            url: 'orgaos/colegiado-pre-novo'
          },
          {
            label: 'Composição Anterior do Colegiado',
            url: 'orgaos/colegiado-anterior'
          },
          {
            label: 'Composição NDE',
            url: 'orgaos/nde'
          },
          {
            label: 'Criar NDE ADM',
            url: 'orgaos/nde-adm-novo'
          },
          {
            label: 'Criar NDE Presidente',
            url: 'orgaos/nde-pre-novo'
          },
          {
            label: 'Composição Anterior do NDE',
            url: 'orgaos/nde-anterior'
          },
        ]
      },
      {
        label: 'Reunião',
        items: [
          {
            label: 'Gerenciar Item de Pauta',
            url: 'reunioes/form-item'
          },
          {
            label: 'Criar Reunião',
            url: 'reunioes/form-reuniao'
          },
          {
            label: 'Calendário de Reunião',
            url: 'reunioes/calendario-reuniao-pre'
          },
          {
            label: 'Calendário de Reunião de membro',
            url: 'reunioes/calendario-reuniao-membro'
          }
        ]
      },

    ];
    this.items = [
      { label: 'Página Principal', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
    ];
  }
}
