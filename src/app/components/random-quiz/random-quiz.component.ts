import {Component, OnInit} from '@angular/core';
import {ChoiceTestQuestion} from '../../common/choiceTestQuestion';
import {QuizService} from '../../services/quiz.service';
import {Answer} from '../../common/answer';

@Component({
  selector: 'app-random-quiz',
  templateUrl: './random-quiz.component.html',
  styleUrls: ['./random-quiz.component.css']
})
export class RandomQuizComponent implements OnInit {

  randomQuestions: ChoiceTestQuestion[];
  answers: Answer[] = [];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getRandomQuiz() {
    this.quizService.getRandomQuiz().subscribe(
      data => this.randomQuestions = data
    );
  }

  addToAnswers(sentence: string, answer: string) {
    if (!this.answers.includes({sentence, answer})) {
    this.answers.push({sentence, answer});
    }
    console.log('add to answers: ' + sentence + ': ' + answer);
  }

  checkQuiz() {
    console.log(this.answers);
  }
}
