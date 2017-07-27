import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormSubmitService {
  private URL: string = 'https://squaresfeedbackapi.azurewebsites.net/api/feedback';
  public constructor(private http: Http) { }
  public submitData(formData: any): void {
    this.http.post(this.URL, formData)
      .subscribe(res => {
        if (res.status === 200) {
          // add stuff in here to close widget and thank for feedback.
        }
      });
  }
}
