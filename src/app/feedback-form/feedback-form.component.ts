import { Component, Input } from '@angular/core';

import { FeedbackData } from '../shared/feedbackData';
import { FormSubmitService } from '../shared/form-submit.service';
import { ParentalAdvisory } from '../shared/parental-advisory';
import { ParentMessagingService } from '../shared/parent-communication.service';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent {
  @Input()
  public feedbackType: string = '';

  @Input()
  public parentFormData: ParentalAdvisory;

  private formData: any = {
    comment: '',
    do_not_contact: true
  };

  private isWaiting: boolean = false;

  constructor(
    private submitService: FormSubmitService,
    private messageService: ParentMessagingService) { }

  public submitForm() {
    this.isWaiting = true;
    let formData = new FeedbackData(this.messageService.parentAdvisoryData);
    formData.comment = this.formData.comment;
    formData.type = this.feedbackType;
    formData.do_not_contact = this.formData.do_not_contact;
    this.submitService.submitData(formData)
      .subscribe(res => {
        this.isWaiting = false;
        if (res.status === 200) {
          this.submitService.feedbackSubmitted =  true;
          this.clearForm();
        }
      });
  }

  public clearForm() {
    this.feedbackType = '';
    this.formData = {
      comment: '',
      do_not_contact: true
    };
    this.submitService.feedbackSubmitted = true;
    setTimeout(this.messageService.broadCastReady, 200);
  }
}
