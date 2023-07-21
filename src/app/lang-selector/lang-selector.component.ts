import { Component } from "@angular/core";
import { TranslateService } from "@tolgee/ngx";

@Component({
  selector: "lang-selector",
  templateUrl: "./lang-selector.component.html",
})
export class LangSelectorComponent {
  constructor(public translateService: TranslateService) {}

  changeLanguage(event: Event): void {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.translateService.changeLanguage(value);
  }
}
