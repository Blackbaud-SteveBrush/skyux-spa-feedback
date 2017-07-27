import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://host.nxt.blackbaud.com') {
        return;
      }

      if (event.data.source === 'feedback-parent') {
        console.log('Message received from template!', event.data.message);
      }
    }, false);

    window.parent.postMessage({
      message: 'Hello, template!',
      source: 'feedback'
    }, '*');
  }
}
