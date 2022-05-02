import {NgModule} from "@angular/core";
import {WelcomeComponent} from "./view/welcome.component";
import {CommonModule} from "@angular/common";
import {WelcomeRouting} from "./welcome.routing";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        WelcomeRouting,
        MatButtonModule
    ],
  declarations: [
    WelcomeComponent
  ],
  exports: [],
  providers: []
})
export class WelcomeModule {}
