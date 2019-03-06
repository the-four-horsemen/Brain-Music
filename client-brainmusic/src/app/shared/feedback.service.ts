import { Injectable } from '@angular/core';
import {Feedback} from './feedback';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  formData: Feedback;
  list: Feedback[];
  private readonly API_URL = 'http://localhost:8080/admin/feedback';

  constructor(private http: HttpClient) {
  }

  getList() {
    this.http.get(this.API_URL).toPromise().then(res =>  this.list = res as Feedback[]);
  }

  deleteFeedback(id: number) {
    return this.http.delete(this.API_URL + id);
  }
}
