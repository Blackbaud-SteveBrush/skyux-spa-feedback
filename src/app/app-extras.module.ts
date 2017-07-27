import { NgModule } from '@angular/core';
import { FormSubmitService } from './shared/form-submit.service';
// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [ FormSubmitService ],
  entryComponents: []
})
export class AppExtrasModule { }
