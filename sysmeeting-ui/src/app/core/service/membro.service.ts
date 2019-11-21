import { Curso } from './campus.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  vincularPresidente(membro: any): Promise<any> {
    return this.http.post(`${this.url}`, membro)
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(membro: any): Promise<any> {
    return this.http.post('http://localhost:8080/membros', membro)
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(membro: any): Promise<any> {
    return this.http.put(`${this.url}/${membro.id}`, membro)
      .toPromise()
      .then(response => response.valueOf());
  }
}
