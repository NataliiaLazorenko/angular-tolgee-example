import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `
    <h2>{{ "Hello World" | translate }}</h2>
    <p>{{ "This is my first component!" | translate }}</p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
