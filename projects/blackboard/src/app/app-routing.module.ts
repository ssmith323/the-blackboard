import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousTemplateComponent } from './layout/anonymous-template/anonymous-template.component';
import { LayoutModule } from './layout/layout.module';
import { LoginTemplateComponent } from './layout/login-template/login-template.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AnonymousTemplateComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', component: NotFoundComponent },
    ],
    canActivate: [],
  },
  {
    path: '',
    component: LoginTemplateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LoginComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [NotFoundComponent, LoginComponent, RegisterComponent];
}
