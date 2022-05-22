import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = `https://itunes.apple.com/search?term=radiohead&enitity=album`
  constructor(private httpClient: HttpClient) { }

  getArchives() {
    return this.httpClient.get<any>(this.apiUrl)
  }
}
