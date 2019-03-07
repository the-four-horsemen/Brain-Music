import { Injectable } from '@angular/core';
import {Music} from "./music.model";
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusiclistService {

  formData: Music;
  list: Music[];
  private API_URL = 'http://localhost:8080/admin/songs/';

  constructor(private http: HttpClient) {
  }

  postSong(formData: Music) {
    return this.http.post(this.API_URL, formData);
  }

  refreshList() {
    this.http.get(this.API_URL).toPromise().then(res => this.list = res as Music[]);
  }


  putSong(formData: Music) {
    return this.http.put(this.API_URL + formData.id, formData);
  }

  deleteSong(id: number) {
    return this.http.delete(this.API_URL + id);
  }
}
