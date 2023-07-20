import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  DevTools,
  NgxTolgeeModule,
  Tolgee,
  TOLGEE_INSTANCE,
  FormatSimple,
} from "@tolgee/ngx";
import { environment } from "../environments/environment.development";

import { AppComponent } from "./app.component";
import { LanguageSwitcher } from "./language-switcher/language-switcher.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { HelloWorldTemplateComponent } from "./hello-world-template.component";
import { HelloWorldNgIfComponent } from "./hello-world-ngif/hello-world-ngif.component";
import { HelloWorldDependencyInjectionComponent } from "./hello-world-di/hello-world-di.component";
import { HelloWorldInterpolationComponent } from "./hello-world-interpolation/hello-world-interpolation.component";
import { HelloWorldBindingsComponent } from "./hello-world-bindings/hello-world-bindings.component";

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcher,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
  ],
  imports: [NgxTolgeeModule, BrowserModule],
  providers: [
    {
      provide: TOLGEE_INSTANCE,
      useFactory: () => {
        return Tolgee()
          .use(DevTools())
          .use(FormatSimple())
          .init({
            availableLanguages: ["en", "uk", "de"],

            // for development
            apiUrl: environment.tolgeeApiUrl,
            apiKey: environment.tolgeeApiKey,
            fallbackLanguage: "en",
            defaultLanguage: "en",

            // for production
            staticData: {},
          });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
