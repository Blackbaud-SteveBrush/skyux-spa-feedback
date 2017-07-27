import { Component } from '@angular/core';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html'
})
export class FeedbackComponent {
  public parentType: string = '';
  
  public updateType(responseType: string): void {
    this.parentType = responseType;
  }
}