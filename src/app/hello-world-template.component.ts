import { Component } from "@angular/core";

@Component({
  selector: "hello-world-template",
  template: `
    <h2>{{ "Hello World Template" | translate }}</h2>
    <button type="button" (click)="onEditClick()">
      {{ "Make text editable!" | translate }}
    </button>
    <p [contentEditable]="canEdit">{{ message | translate }}</p>
  `,
})
export class HelloWorldTemplateComponent {
  message = "I am read only!";
  canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = "You can edit me!";
    } else {
      this.message = "I am read only!";
    }
  }
}
