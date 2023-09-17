import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BaseRestService } from './baseRest.service';
import { IApartamento } from 'src/models/apartamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartamentoRestService extends BaseRestService {

  constructor(
    private client: HttpClient
  ) {
    super('apartamentos')
  }
  headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

  public ListarTodos():Observable<IApartamento[]> {
    return this.client.get<IApartamento[]>(this.actionUrl);
  }
  public recuperarPorOpcao(opcoes: string[]): Observable<IApartamento[]> {
    const options = { headers: this.headers };
    return this.client.post<IApartamento[]>(`${this.actionUrl}/opcoes`, JSON.stringify(opcoes),options);
  }
}
