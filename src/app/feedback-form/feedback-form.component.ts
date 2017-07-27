import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'feedback-form-feedback',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent {
  @Input()
  public feedbackType: string;

  public doNotContact = {
    checked: true
  };

  private formData: any;

  constructor(
    private submitService: FormSubmitService,
    private router: Router) { }

  public submitForm(comment: string) {
    this.formData = {
      comment,
      do_not_contact: this.doNotContact.checked,
      type: this.feedbackType
    };

    this.submitService.submitData(this.formData);
  }

  public clearForm() {
    this.feedbackType = 'negative';
  }
}
