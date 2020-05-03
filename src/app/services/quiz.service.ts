import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VerbQuestion} from '../common/verbQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8080/api/exam';

  constructor(private httpClient: HttpClient) { }

  getVerbsExam(): Observable<VerbQuestion[]> {
    return this.httpClient.get<VerbQuestion[]>(this.baseUrl + '/forms');
  }
}
