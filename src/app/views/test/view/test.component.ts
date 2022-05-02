import {Component} from "@angular/core";
import {QuestionsService} from "../../../services/questions.service";
import {Router} from "@angular/router";
import {Question} from "../../../models/question";

@Component({
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.scss']
})
export class TestComponent {
  public questions: Question[] = [];
  public currentIndex = 0;

  constructor(
    private router: Router,
    private questionsService: QuestionsService
  ) {
    this.questions = this.questionsService.getQuestionsList();
    if (this.questions.length === 0) {
      this.router.navigate(['./'])
    }
  }

  public onNextQuestion(response: any, index: number): void {
    this.questionsService.saveQuestionResponse(response, index);
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.questions.length) {
      this.router.navigate(['result'])
    }
  }
}
