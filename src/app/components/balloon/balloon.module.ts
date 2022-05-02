import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BalloonComponent} from "./view/balloon.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BalloonComponent
  ],
  exports: [
    BalloonComponent
  ],
  providers: []
})
export class BalloonModule {}
