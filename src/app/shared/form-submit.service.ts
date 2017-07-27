import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { FeedbackData } from './feedbackData';

@Injectable()
export class FormSubmitService {
  private URL: string = '/foo';

  public submitData(formData: any): void {
    console.log(`Submitted Data to ${this.URL}`, formData);
    // Http.post(URL, formData);
  }
}
