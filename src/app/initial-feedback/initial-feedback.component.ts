import { Component } from '@angular/core';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html'
})
export class FeedbackComponent {
  public parentType: string = '';

  public onClear(event: any) {
    console.log(event);
  }
}

