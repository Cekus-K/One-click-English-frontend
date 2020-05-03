import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Question} from '../../common/question';

@Component({
  selector: 'app-verbs-quiz',
  templateUrl: './verbs-quiz.component.html',
  styleUrls: ['./verbs-quiz.component.css']
})
export class VerbsQuizComponent implements OnInit {

  verbQuestions: Question[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getVerbsQuiz() {
    this.quizService.getVerbsExam().subscribe(
      data => this.verbQuestions = data
    );
  }
}
