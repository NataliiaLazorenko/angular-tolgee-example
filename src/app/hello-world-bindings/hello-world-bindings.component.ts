import { Component } from "@angular/core";

@Component({
  selector: "hello-world-bindings",
  templateUrl: "./hello-world-bindings.component.html",
})
export class HelloWorldBindingsComponent {
  fontColor = "blue";
  fontColorText = "blue";
  sayHelloId = 1;
  canClick = true;
  message = "Hello, World";

  sayMessage() {
    alert(this.message);
  }
}
