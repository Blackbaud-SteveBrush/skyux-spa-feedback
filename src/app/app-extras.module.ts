import { NgModule } from '@angular/core';
import { FormSubmitService } from './shared/form-submit.service';
// Specify entry components, module-level providers, etc. here.
require('style-loader!./app.styles.scss');

@NgModule({
  providers: [ FormSubmitService ],
  entryComponents: []
})
export class AppExtrasModule { }
