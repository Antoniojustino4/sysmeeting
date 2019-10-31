import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}
  adicionar(item: any): Promise<any> {
    return this.http.post('http://localhost:8080/reuniao/adicionaritem', item)
      .toPromise()
      .then(response => response.valueOf())
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar item: ${item.id}`);
      });
  }
  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/campus/${id}`)
      .toPromise()
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir item com o id: ${id}`);
      });
  }

}
