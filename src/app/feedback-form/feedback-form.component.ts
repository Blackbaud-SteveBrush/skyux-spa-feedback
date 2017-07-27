import { Component, Input } from '@angular/core';
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

  constructor(private submitService: FormSubmitService) { }

  public submitForm() {
    this.feedbackType = 'positive';
    this.submitService.submitData(this.formData);
  }

  public clearForm() {
    this.feedbackType = 'negative';
  }
}
