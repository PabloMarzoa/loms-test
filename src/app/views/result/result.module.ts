import {NgModule} from "@angular/core";
import {ResultComponent} from "./view/result.component";
import {CommonModule} from "@angular/common";
import {ResultRouting} from "./result.routing";
import {QuestionModule} from "../../components/question/question.module";
import {BenderModule} from "../../components/bender/bender.module";
import {BalloonModule} from "../../components/balloon/balloon.module";

@NgModule({
    imports: [
        CommonModule,
        ResultRouting,
        QuestionModule,
        BenderModule,
        BalloonModule
    ],
  declarations: [
    ResultComponent
  ],
  exports: [],
  providers: []
})
export class ResultModule {}
