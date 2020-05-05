import {Component, OnInit} from '@angular/core';
import {WrittenTestQuestion} from '../../common/writtenTestQuestion';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-examples-quiz',
  templateUrl: './examples-quiz.component.html',
  styleUrls: ['./examples-quiz.component.css']
})
export class ExamplesQuizComponent implements OnInit {

  examplesQuestions: WrittenTestQuestion[];
  answers: boolean[] = [];
  check = false;
  showAnswers = false;
  correct = 'Dobrze!';
  incorrect = 'Źle!';

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getExamplesExam() {
    this.showAnswers = false;
    this.quizService.getExampleExam().subscribe(
      data => this.examplesQuestions = data
    );
  }

  getPrompt(question: WrittenTestQuestion) {
    question.prompt = !question.prompt;
  }

  addToAnswers(givenWord: string, question: WrittenTestQuestion) {
    const index = this.examplesQuestions.indexOf(question);
    this.answers[index] = question.answer.enWord === givenWord;
  }

  checkQuiz() {
    this.check = true;
    setTimeout(() => {
      this.showAnswers = true;
    }, 5);
  }
}
