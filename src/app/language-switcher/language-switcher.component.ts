import { Component } from "@angular/core";

@Component({
  selector: "language-switcher",
  templateUrl: "./language-switcher.component.html",
})
export class LanguageSwitcher {
  fontColor = "grey";
  textDecoration = "none";
  listStyle = "none";
  marginLeft = "80%";

  localesList = [
    { code: "en-US", label: "🇬🇧 English" },
    { code: "uk", label: "🇺🇦 Українська" },
    { code: "de", label: "🇩🇪 Deutsch" },
  ];
}
