import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public localUrl = 'assets/data/catalog-data.json';

  // fetching the data
  getData() {
    return this.http.get(this.localUrl);
  }
}
