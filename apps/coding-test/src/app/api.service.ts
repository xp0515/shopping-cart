import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archive } from './cart/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = `https://archive.org/metadata/TheAdventuresOfTomSawyer_201303`
  constructor(private httpClient: HttpClient) { }

  getArchives() {
    return this.httpClient.get<Archive>(this.apiUrl)
  }
}
