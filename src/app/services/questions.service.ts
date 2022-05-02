import {Injectable} from "@angular/core";
import {Question} from "../models/question";
import {QuestionsDataService} from "./questions-data.service";

@Injectable({providedIn: 'root'})
export class QuestionsService {
  private questions: Question[] = [];

  constructor(
    private questionsDataService: QuestionsDataService
  ) {}

  public getQuestionsList(): Question[] {
    return this.questions;
  }

  public initQuestions(): void {
    this.questions = [];
    for (let i = 0; i <= 9; i++) {
      const randomType = Math.floor(Math.random() * (2 + 1));
      this.questions.push(this.questionsDataService.getQuestion(i, randomType));
    }
  }

  public saveQuestionResponse(response: any, index: number): Question[] {
    this.questions[index].response = response;
    return this.questions;
  }
}
