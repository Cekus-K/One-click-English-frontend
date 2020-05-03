import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../common/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8080/api/exam';

  constructor(private httpClient: HttpClient) {
  }

  getVerbsExam(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.baseUrl + '/forms');
  }

  getRandomExam(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.baseUrl + '/random');
  }

  getExampleExam(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.baseUrl + '/examples');
  }
}
