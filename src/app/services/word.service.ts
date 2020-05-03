import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Word} from '../common/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private baseUrl = 'http://localhost:8080/api/words';

  constructor(private httpClient: HttpClient) {
  }

  getWords(): Observable<Word[]> {
    return this.httpClient.get<Word[]>(this.baseUrl + '/list');
  }

  addWord(word: Word): Observable<Word> {
    return this.httpClient.post<Word>(this.baseUrl + '/add', JSON.stringify(word));
  }

  deleteWord(word: Word): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl + '/remove', JSON.stringify(word));
  }
}
