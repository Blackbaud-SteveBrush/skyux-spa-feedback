import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html'
})
export class InitialFeedbackComponent {
  @Input()
  public message: string;
}