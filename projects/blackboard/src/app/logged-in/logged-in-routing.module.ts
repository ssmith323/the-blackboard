import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTalkingpointComponent } from './create-talkingpoint/create-talkingpoint.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateTalkingpointComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedInRoutingModule {
  static components = [HomeComponent, CreateTalkingpointComponent];
}
