import { NgModule } from '@angular/core';
import { FormSubmitService } from './shared/form-submit.service';
import { ParentMessagingService } from './shared/parent-communication.service';
// Specify entry components, module-level providers, etc. here.
require('style-loader!./app.styles.scss');

@NgModule({
  providers: [
    FormSubmitService,
    ParentMessagingService
   ],
  entryComponents: []
})
export class AppExtrasModule { }
