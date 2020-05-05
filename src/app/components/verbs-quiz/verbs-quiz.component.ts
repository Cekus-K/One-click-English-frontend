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
  answers: boolean[] = [];
  check = false;
  correct = 'Dobrze!';
  incorrect = 'Źle!';

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  getVerbsQuiz() {
    this.quizService.getVerbsQuiz().subscribe(data => {
        this.check = false;
        this.verbQuestions = data;
      }
    );
  }

  addToAnswers(markedAnswer: string, question: ChoiceTestQuestion) {
    const index = this.verbQuestions.indexOf(question);
    this.answers[index] = question.answer === markedAnswer;
  }

  checkQuiz() {
    this.check = true;
  }
}
