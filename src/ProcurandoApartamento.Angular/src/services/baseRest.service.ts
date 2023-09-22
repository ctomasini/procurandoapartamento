import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRestService {

  protected actionUrl: string = 'http://localhost:5000/api';
  private endPoint: string = '';

  constructor(endpoint: string) {
    this.endPoint = endpoint;
    this.actionUrl = `${this.actionUrl}/${this.endPoint}`
  }
}
