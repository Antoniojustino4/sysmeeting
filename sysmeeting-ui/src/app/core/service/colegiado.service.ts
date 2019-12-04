import { Membro } from './membro.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Colegiado {
  inicioDeVigencia: Date;
  mesesDaVigencia: number;
  qtdDiscentes: number;
  qtdTecAdministrativos: number;
  portaria: number;
  mesesDeReconducao: number;
  qtdDocentes: number;
  qtdDocentesExternos: number;
  regulamento: number;
  membros: Membro[];
}

@Injectable({
  providedIn: 'root'
})
export class ColegiadoService {

  url = 'http://localhost:8080/orgaos/colegiado';

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  consultarPeloId(id: number): Promise<any> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(colegiado: any, id: number): Promise<any> {
    return this.http.post('http://localhost:8080/cursos/' + id + '/orgoes/colegiado', colegiado)
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(colegiado: any): Promise<any> {
    return this.http.put(`${this.url}/${colegiado.id}`, colegiado)
      .toPromise()
      .then(response => response.valueOf());
  }
}
