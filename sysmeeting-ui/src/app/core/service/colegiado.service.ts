import { AuthService } from './../../seguranca/auth.service';
import { Membro } from './membro.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  url = 'http://localhost:8080/orgoes/colegiado';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  consultar(): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  consultarPeloId(id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.get(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  adicionar(colegiado: any, id: number): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.post('http://localhost:8080/cursos/' + id + '/orgoes/colegiado', colegiado, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }

  excluir(id: number): Promise<void> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.delete(`${this.url}/${id}`, { headers})
      .toPromise()
      .then(() => null);
  }

  atualizar(colegiado: any): Promise<any> {
    this.auth.fazerRequisicao();
    const headers = new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'));

    return this.http.put(`${this.url}/${colegiado.id}`, colegiado, { headers})
      .toPromise()
      .then(response => response.valueOf());
  }
}
