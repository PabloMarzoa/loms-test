import {NgModule} from "@angular/core";
import {QuestionComponent} from "./view/question.component";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule
  ],
  declarations: [
    QuestionComponent
  ],
  exports: [
    QuestionComponent
  ],
  providers: []
})
export class QuestionModule {}
