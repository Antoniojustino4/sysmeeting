import { Orgao } from './membro.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtaService {

  constructor(private http: HttpClient) { }
}
