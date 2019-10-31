import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Membro {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
  conta: ContaDeAcesso;
  tipo: Tipo;
}

export class Tipo {
  nome: string;
}


export class ContaDeAcesso {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  url = 'http://localhost:8080/membros';

  constructor(private http: HttpClient) {}

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao consulta membros`);
      });
  }

  vincularPresidente(membro: any): Promise<any> {
    return this.http.post(`${this.url}`, membro)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar membro: ${membro.id}`);
      });
  }

  adicionar(membro: any): Promise<any> {
    return this.http.post(`${this.url}`, membro)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar membro: ${membro.id}`);
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir membro com o id: ${id}`);
      });
  }

  atualizar(membro: any): Promise<any> {
    return this.http.put(`${this.url}/${membro.id}`, membro)
    .toPromise()
    .then(response => response.valueOf())
    .catch(erro => {
      return Promise.reject(`Erro ao alterar membro: ${membro.id}`);
    });
  }
}
