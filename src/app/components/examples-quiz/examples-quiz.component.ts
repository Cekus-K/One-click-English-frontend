import { Component, OnInit } from '@angular/core';
import {WrittenTestQuestion} from '../../common/writtenTestQuestion';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-examples-quiz',
  templateUrl: './examples-quiz.component.html',
  styleUrls: ['./examples-quiz.component.css']
})
export class ExamplesQuizComponent implements OnInit {

  examplesQuestions: WrittenTestQuestion[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getExamplesExam() {
    this.quizService.getExampleExam().subscribe(
      data => this.examplesQuestions = data
    );
  }

  getPrompt(question: WrittenTestQuestion) {
    question.prompt = true;
  }
}
