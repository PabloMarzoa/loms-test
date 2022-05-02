import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Question, QuestionsTypes} from "../../../models/question";

@Component({
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.scss'],
  selector: 'question-component'
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question | undefined;
  @Input() showResult: boolean = false;
  @Input() nextActionLabel: string = 'Next';
  @Input() editable: boolean = true;
  @Input() index: number = 0;
  @Output() saveValue: EventEmitter<any> = new EventEmitter<any>();

  public questionsTypes = QuestionsTypes;
  public value: string | null = null;
  public showError: boolean = false;
  public years: string[] = [];
  public filteredYears: string[] = [];

  ngOnChanges(): void {
    this.value = this.question?.response as string | null;
    this.showError = false;
    this.setYears();
  }

  get hasValidValue(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  public onSaveValue(): void {
    if (!this.hasValidValue) {
      this.showError = true;
      return;
    } else {
      this.saveValue.emit(this.value);
    }
  }

  public filterYears(value: string): void {
    this.filteredYears = [];
    [...this.years].filter(year => year.includes(value)).forEach(year => {
      if (this.filteredYears.findIndex(y => y === year) === -1) {
        this.filteredYears.push(year);
      }
    });
  }

  public isCorrect(): boolean {
    return this.question?.value?.toLowerCase() === this.question?.response?.toLowerCase();
  }

  private setYears(): void {
    this.years = [];
    for (let i = 1400; i <= 2022; i++) {
      this.years.push(i + '');
    }
    this.filteredYears = this.years;
  }
}
