import { Component, Input } from '@angular/core';

import { FeedbackData } from '../shared/feedbackData';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'feedback-form-feedback',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent {
  @Input()
  public feedbackType: string;

  private formData: any;

  constructor(private submitService: FormSubmitService) {
    this.formData = new FeedbackData();
  }

  public submitForm() {
    this.formData.type = this.feedbackType;
    this.submitService.submitData(this.formData);
  }

  public clearForm() {
    this.formData.comment = '';
    this.formData.do_not_contact = true;
  }
}
