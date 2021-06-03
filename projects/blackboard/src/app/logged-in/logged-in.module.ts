import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormFieldModule } from 'projects/form-fields/src/public-api';

import { LoggedInRoutingModule } from './logged-in-routing.module';

@NgModule({
  declarations: [LoggedInRoutingModule.components],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatCardModule,
    FormFieldModule,
  ],
})
export class LoggedInModule {}
