import {NgModule} from "@angular/core";
import {TestComponent} from "./view/test.component";
import {CommonModule} from "@angular/common";
import {TestRouting} from "./test.routing";
import {MatButtonModule} from "@angular/material/button";
import {QuestionModule} from "../../components/question/question.module";

@NgModule({
  imports: [
    CommonModule,
    TestRouting,
    MatButtonModule,
    QuestionModule
  ],
  declarations: [
    TestComponent
  ],
  exports: [],
  providers: []
})
export class TestModule {}
