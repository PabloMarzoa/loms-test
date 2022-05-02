import {Component} from "@angular/core";
import {QuestionsService} from "../../../services/questions.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent {

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  public onStart(): void {
    this.questionsService.initQuestions();
    this.router.navigate(['./game'])
  }
}
