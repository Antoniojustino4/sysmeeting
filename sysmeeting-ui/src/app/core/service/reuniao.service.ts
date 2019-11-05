import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Reuniao {
  data: string;
  tipo: string;
  estado: string;
}

export class ReuniaoService {

  url = 'http://localhost:8080/reuniao';

  constructor(private http: HttpClient) {}
}
