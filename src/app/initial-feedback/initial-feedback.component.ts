import { Component } from '@angular/core';
import { ParentalAdvisory } from '../shared/parental-advisory';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html'
})
export class FeedbackComponent {
  public parentType: string = '';
  public parentFormData: ParentalAdvisory;

  constructor() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://host.nxt.blackbaud.com') {
        return;
      }

      if (event.data.source === 'feedback-parent') {
        console.log('Message received from template!', event.data);
        this.parentFormData = event.data.response;
      }
    }, false);
  }

  public sendHeightToSpa() {
    setTimeout(() => {
      let feedbackHeight = window.document.body.offsetHeight;
      let feedbackWidth = window.document.body.offsetWidth;
      window.parent.postMessage({
        message: 'Expand Iframe please Mom',
        source: 'feedback',
        feedbackHeight,
        feedbackWidth
      }, '*'); }, 200);
  }
}
