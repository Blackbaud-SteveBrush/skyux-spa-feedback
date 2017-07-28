import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormSubmitService {
  private URL: string = 'https://squaresfeedbackapi.azurewebsites.net/api/feedback';

  public feedbackSubmitted: boolean = false;

  public constructor(private http: Http) { }

  public submitData(formData: any): any {
    console.log(formData);
    return this.http.post(this.URL, formData);
  }
}
