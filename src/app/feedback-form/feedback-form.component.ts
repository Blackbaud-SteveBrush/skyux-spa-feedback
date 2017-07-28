import { Component, Input, AfterViewInit } from '@angular/core';

import { FeedbackData } from '../shared/feedbackData';
import { FormSubmitService } from '../shared/form-submit.service';
import { ParentalAdvisory } from '../shared/parental-advisory';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class PositiveFormFeedbackComponent implements AfterViewInit {
  @Input()
  public feedbackType: string = '';

  @Input()
  public parentFormData: ParentalAdvisory;

  private formData: any = {
    comment: '',
    do_not_contact: true
  };

  private isWaiting: boolean = false;
  public feedbackSubmitted: boolean = false;

  constructor(private submitService: FormSubmitService) { }

  public ngAfterViewInit() {
    let feedbackHeight = window.document.body.offsetHeight;
    let feedbackWidth = window.document.body.offsetWidth;
    window.parent.postMessage({
      message: 'Hello, template!',
      source: 'feedback',
      feedbackHeight,
      feedbackWidth
    }, '*');
  }

  public submitForm() {
    this.isWaiting = true;
    let formData = new FeedbackData(this.parentFormData);
    formData.comment = this.formData.comment;
    formData.type = this.feedbackType;
    formData.do_not_contact = this.formData.do_not_contact;
    this.submitService.submitData(formData)
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
