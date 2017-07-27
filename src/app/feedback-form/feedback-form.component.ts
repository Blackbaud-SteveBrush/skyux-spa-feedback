import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FeedbackData } from '../shared/feedbackData';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent {
  @Input()
  public feedbackType: string = '';

  private formData: any;
  private isWaiting: boolean = false;
  public feedbackSubmitted: boolean = false;

  constructor(private submitService: FormSubmitService) {
    this.formData = new FeedbackData();
  }

  public submitForm() {
    this.isWaiting = true;
    this.formData.type = this.feedbackType;
    this.submitService.submitData(this.formData)
      .subscribe(res => {
        this.isWaiting = false;
        if (res.status === 200) {
          this.clearForm();
        }
      });
  }

  public clearForm() {
    this.formData = new FeedbackData();
    this.feedbackType = '';
    this.feedbackSubmitted =  true;
  }
}
