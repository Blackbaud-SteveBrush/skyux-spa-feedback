import { Component, Input } from '@angular/core';
import { FormSubmitService } from '../shared/form-submit.service';

@Component({
  selector: 'positive-form-feedback',
  templateUrl: './positive-form.component.html',
  styleUrls: ['./positive-form.component.scss']
})
export class PositiveFormFeedbackComponent {
  @Input()
  public positiveFeedback: boolean;

  private formData: any;
  public mayContactUser: boolean = false;

  constructor(private submitService: FormSubmitService) { }

  public submitForm() {
    console.log('submitting');
    console.log(this.mayContactUser);
    this.submitService.submitData(this.formData);
  }

  public clearForm() {

  }
}
