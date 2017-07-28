import { Component, OnInit } from '@angular/core';
import { ParentalAdvisory } from '../shared/parental-advisory';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html'
})
export class FeedbackComponent implements OnInit {
  public parentType: string = '';
  public parentFormData: ParentalAdvisory;

  public ngOnInit() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://host.nxt.blackbaud.com') {
        return;
      }

      if (event.data.source === 'feedback-parent') {
        console.log('Message received from template!', event.data);
        this.parentFormData = event.data.response;
      }
    }, false);

    window.parent.postMessage({
      message: 'Hello, template!',
      source: 'feedback'
    }, '*');
  }
}

