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
  answers: boolean[] = [];
  check = false;
  showAnswers = false;
  correct = 'Dobrze!';
  incorrect = 'Źle!';

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getDefinitionsExam() {
    this.showAnswers = false;
    this.quizService.getDefinitionsExam().subscribe(
      data => this.definitionsQuestions = data
    );
  }

  getPrompt(question: WrittenTestQuestion) {
    question.prompt = !question.prompt;
  }

  addToAnswers(givenWord: string, question: WrittenTestQuestion) {
    const index = this.definitionsQuestions.indexOf(question);
    this.answers[index] = question.answer.enWord === givenWord;
  }

  checkQuiz() {
    this.check = true;
    setTimeout(() => {
      this.showAnswers = true;
    }, 5);
  }
}
