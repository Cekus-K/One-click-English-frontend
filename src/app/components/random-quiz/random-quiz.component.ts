import { Component, OnInit } from '@angular/core';
import {Question} from '../../common/question';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-random-quiz',
  templateUrl: './random-quiz.component.html',
  styleUrls: ['./random-quiz.component.css']
})
export class RandomQuizComponent implements OnInit {

  randomQuestions: Question[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getVerbsQuiz() {
    this.quizService.getRandomExam().subscribe(
      data => this.randomQuestions = data
    );
  }
}
