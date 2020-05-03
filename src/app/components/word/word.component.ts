import {Component, OnInit} from '@angular/core';
import {Word} from '../../common/word';
import {WordService} from '../../services/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  words: Word[];
  word: Word = new Word();

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.listWords();
  }

  listWords() {
    this.wordService.getWords().subscribe(
      data => this.words = data
    );
  }

  addNewWord() {
    this.wordService.addWord(this.word).subscribe(() => {
      this.listWords();
      this.reset();
    });
  }

  private reset() {
    this.word.enWord = null;
  }
}
