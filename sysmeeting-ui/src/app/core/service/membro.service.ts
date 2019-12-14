import { Curso } from './campus.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Membro {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
  contaAcesso: ContaDeAcesso;
  tipo: string;
  orgoes = [];
}

export class Tipo {
  nome: string;
}

export class ContaDeAcesso {
  email: string;
  senha: string;
}

export class Orgao {
  id: number;
  curso = new Curso();
}

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  url = 'http://localhost:8080/membros';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  vincularPresidente(membro: any): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post(`${this.url}`, membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(membro: any): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/membros', membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(membro: any): Promise<any> {
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${membro.id}`, membro, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
