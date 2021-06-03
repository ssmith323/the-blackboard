import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoggedInRoutingModule } from './logged-in-routing.module';

@NgModule({
  declarations: [LoggedInRoutingModule.components],
  imports: [CommonModule, LoggedInRoutingModule],
})
export class LoggedInModule {}
