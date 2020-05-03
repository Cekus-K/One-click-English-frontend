import { Component, OnInit } from '@angular/core';
import {ChoiceTestQuestion} from '../../common/choiceTestQuestion';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-random-quiz',
  templateUrl: './random-quiz.component.html',
  styleUrls: ['./random-quiz.component.css']
})
export class RandomQuizComponent implements OnInit {

  randomQuestions: ChoiceTestQuestion[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getRandomQuiz() {
    this.quizService.getRandomQuiz().subscribe(
      data => this.randomQuestions = data
    );
  }
}
