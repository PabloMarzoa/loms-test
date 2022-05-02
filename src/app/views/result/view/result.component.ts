import {Component} from "@angular/core";
import {QuestionsService} from "../../../services/questions.service";
import {Router} from "@angular/router";
import {Question} from "../../../models/question";

@Component({
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.scss']
})
export class ResultComponent {

  public questions: Question[] = [];
  public correctAnswers = 0;

  constructor(
    private router: Router,
    private questionService: QuestionsService
  ) {
    this.questions = this.questionService.getQuestionsList();
    if (this.questions.length === 0) {
      this.router.navigate(['./'])
    }
    this.checkResult();
  }

  public onRestartGame(): void {
    this.questionService.initQuestions();
    this.router.navigate(['welcome']);
  }

  private checkResult(): void {
    this.correctAnswers = 0;
    this.questions.forEach(question => {
      if (!!question?.response && question?.response?.toString().toLowerCase() === question?.value?.toLowerCase()) {
        this.correctAnswers += 1;
      }
    });
  }
}
