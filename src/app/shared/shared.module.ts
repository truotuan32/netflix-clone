import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { ButtonComponent } from "./button/button.component";
import { BtnNextDirective } from './btn-next.directive';
import { BtnPrevDirective } from './btn-prev.directive';
import { IntroComponent } from "./intro/intro.component";
import { HeaderBackgroundDerictive } from "./header-background.directive";
@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent, IntroComponent, BtnNextDirective, BtnPrevDirective, HeaderBackgroundDerictive],
    exports: [ButtonComponent, IntroComponent, BtnNextDirective, BtnPrevDirective, HeaderBackgroundDerictive]
})
export class SharedModule {

}