import { Component, Input, OnInit } from '@angular/core';

import { FeedbackData } from '../shared/feedbackData';
import { FormSubmitService } from '../shared/form-submit.service';
import { ParentalAdvisory } from '../shared/parental-advisory';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent implements OnInit {
  @Input()
  public feedbackType: string = '';

  @Input()
  public parentFormData: ParentalAdvisory;

  private formData: any;
  private isWaiting: boolean = false;
  public feedbackSubmitted: boolean = false;

  constructor(private submitService: FormSubmitService) { }

  public ngOnInit() {
    this.formData = new FeedbackData(this.parentFormData);
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
    this.formData = new FeedbackData(this.parentFormData);
    this.feedbackType = '';
    this.feedbackSubmitted =  true;
  }
}
