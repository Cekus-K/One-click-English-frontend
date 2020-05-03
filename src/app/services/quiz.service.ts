import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChoiceTestQuestion} from '../common/choiceTestQuestion';
import {WrittenTestQuestion} from '../common/writtenTestQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8080/api/exam';

  constructor(private httpClient: HttpClient) {
  }

  getVerbsQuiz(): Observable<ChoiceTestQuestion[]> {
    return this.httpClient.get<ChoiceTestQuestion[]>(this.baseUrl + '/forms');
  }

  getRandomQuiz(): Observable<ChoiceTestQuestion[]> {
    return this.httpClient.get<ChoiceTestQuestion[]>(this.baseUrl + '/random');
  }

  getExampleExam(): Observable<WrittenTestQuestion[]> {
    return this.httpClient.get<WrittenTestQuestion[]>(this.baseUrl + '/examples');
  }

  getDefinitionsExam(): Observable<WrittenTestQuestion[]> {
    return this.httpClient.get<WrittenTestQuestion[]>(this.baseUrl + '/definitions');
  }

}
