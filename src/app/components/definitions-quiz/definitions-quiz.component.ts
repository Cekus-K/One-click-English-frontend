import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {WrittenTestQuestion} from '../../common/writtenTestQuestion';

@Component({
  selector: 'app-definitions-quiz',
  templateUrl: './definitions-quiz.component.html',
  styleUrls: ['./definitions-quiz.component.css']
})
export class DefinitionsQuizComponent implements OnInit {

  definitionsQuestions: WrittenTestQuestion[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getDefinitionsExam() {
    this.quizService.getDefinitionsExam().subscribe(
      data => this.definitionsQuestions = data
    );
  }

  getPrompt(question: WrittenTestQuestion) {
    question.prompt = !question.prompt;
  }
}
