import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {ChoiceTestQuestion} from '../../common/choiceTestQuestion';

@Component({
  selector: 'app-verbs-quiz',
  templateUrl: './verbs-quiz.component.html',
  styleUrls: ['./verbs-quiz.component.css']
})
export class VerbsQuizComponent implements OnInit {

  verbQuestions: ChoiceTestQuestion[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getVerbsQuiz() {
    this.quizService.getVerbsQuiz().subscribe(
      data => this.verbQuestions = data
    );
  }
}
