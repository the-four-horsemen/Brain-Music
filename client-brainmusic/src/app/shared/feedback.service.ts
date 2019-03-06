import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly API_URL_USER = 'http://localhost:8080/feedback';

  constructor(private http: HttpClient) {
  }

  createFeedback(feedback: Partial<Feedback>): Observable<Feedback> {
    return this.http.post<Feedback>(this.API_URL_USER, feedback);
  }
}
