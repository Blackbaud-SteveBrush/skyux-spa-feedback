import { Component, AfterViewInit } from '@angular/core';
import { ParentalAdvisory } from '../shared/parental-advisory';
import { ParentMessagingService } from '../shared/parent-communication.service';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'initial-feedback',
  templateUrl: 'initial-feedback.component.html',
  styleUrls: ['./initial-feedback.component.scss']
})
export class FeedbackComponent implements AfterViewInit {
  public parentType: string = '';
  public parentFormData: ParentalAdvisory;

  constructor(
    private submitService: FormSubmitService,
    private messageService: ParentMessagingService) {
    this.messageService.setupEventListner();
  }

  public ngAfterViewInit() {
    this.messageService.broadCastReady();
  }
  public getFormSubmitted () {
    return this.submitService.feedbackSubmitted;
  }
  public sendHeightToSpa() {
    setTimeout(this.messageService.broadCastReady, 200);
  }
}
