import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousTemplateComponent } from './layout/anonymous-template/anonymous-template.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    component: AnonymousTemplateComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
    ...canActivate(redirectLoggedInToItems),
  },
  {
    path: '',

    loadChildren: () =>
      import('./logged-in/logged-in.module').then((m) => m.LoggedInModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [NotFoundComponent, LoginComponent, RegisterComponent];
}
