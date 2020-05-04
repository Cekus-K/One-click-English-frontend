import {Component, OnInit} from '@angular/core';
import {ChoiceTestQuestion} from '../../common/choiceTestQuestion';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-random-quiz',
  templateUrl: './random-quiz.component.html',
  styleUrls: ['./random-quiz.component.css']
})
export class RandomQuizComponent implements OnInit {

  randomQuestions: ChoiceTestQuestion[];
  answers: boolean[] = [];
  check = false;
  correct = 'Dobrze!';
  incorrect = 'Źle!';

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getRandomQuiz() {
    this.quizService.getRandomQuiz().subscribe(data => {
      this.check = false;
      this.randomQuestions = data;
      }
    );
  }

  addToAnswers(markedAnswer: string, question: ChoiceTestQuestion) {
    const index = this.randomQuestions.indexOf(question);
    this.answers[index] = question.answer === markedAnswer;
  }

  checkQuiz() {
    this.check = true;
  }
}
