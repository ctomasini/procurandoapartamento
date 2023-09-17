import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRestService {
  protected actionUrl: string = 'http://localhost:5000/api/';
  private endPoint: string = '';

  constructor(
    pEndpoint: string
  ) {
    this.endPoint = pEndpoint;
    this.setApiUrl();
  }

  private setApiUrl(){
    this.actionUrl = `${this.actionUrl}${this.endPoint}`;
  }
}
