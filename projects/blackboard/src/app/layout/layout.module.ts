import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AnonymousTemplateComponent } from './anonymous-template/anonymous-template.component';
import { LoginTemplateComponent } from './login-template/login-template.component';

@NgModule({
  declarations: [LoginTemplateComponent, AnonymousTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [LoginTemplateComponent, AnonymousTemplateComponent],
})
export class LayoutModule {}
