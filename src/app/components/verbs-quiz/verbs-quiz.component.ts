import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {ChoiceTestQuestion} from '../../common/choiceTestQuestion';
import {Answer} from '../../common/answer';

@Component({
  selector: 'app-verbs-quiz',
  templateUrl: './verbs-quiz.component.html',
  styleUrls: ['./verbs-quiz.component.css']
})
export class VerbsQuizComponent implements OnInit {

  verbQuestions: ChoiceTestQuestion[];
  answers: Answer[] = [];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getVerbsQuiz() {
    this.quizService.getVerbsQuiz().subscribe(
      data => this.verbQuestions = data
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
