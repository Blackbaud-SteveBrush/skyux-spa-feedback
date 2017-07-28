import { Injectable } from '@angular/core';
import { ParentalAdvisory } from './parental-advisory';

@Injectable()
export class ParentMessagingService {
  public parentAdvisoryData: ParentalAdvisory;

  public broadCastReady() {
    let feedbackHeight = window.document.body.offsetHeight;
    console.log(feedbackHeight, 'Height!');
    window.parent.postMessage({
      message: 'Feedback Changed!',
      source: 'feedback',
      feedbackHeight
    }, '*');
  }

  public closeWidget() {
    window.parent.postMessage({
      message: 'Close Feedback',
      source: 'feedback',
      actionType: 'close'
    }, '*');
  }

  public setupEventListner() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://host.nxt.blackbaud.com') {
        return;
      }

      if (event.data.source === 'feedback-parent') {
        this.parentAdvisoryData = event.data.response;
      }
    }, false);
  }

}
