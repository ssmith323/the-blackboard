import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormFieldModule } from 'projects/form-fields/src/public-api';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { ItemComponent } from './presetation/talking-point/item/item.component';

@NgModule({
  declarations: [LoggedInRoutingModule.components, ItemComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormFieldModule,
    AngularFireDatabaseModule,
  ],
})
export class LoggedInModule {}
