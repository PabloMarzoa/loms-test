import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BenderComponent} from "./view/bender.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BenderComponent
  ],
  declarations: [
    BenderComponent
  ],
  providers: []
})
export class BenderModule {}
