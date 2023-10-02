import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getComponents() {
    return this.httpClient.get(`${environment.localUrl}getComponents`);
  }

  updateComponents(components = []) {
    return this.httpClient.post(`${environment.localUrl}updateComponents`, components);
  }
}
