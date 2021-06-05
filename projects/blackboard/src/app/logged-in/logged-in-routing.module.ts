import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousTemplateComponent } from '../layout/anonymous-template/anonymous-template.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginTemplateComponent } from '../layout/login-template/login-template.component';
import { CreateTalkingpointComponent } from './create-talkingpoint/create-talkingpoint.component';
import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './presetation/countdown/countdown.component';
import { PresetationComponent } from './presetation/presetation.component';
import { TalkingPointComponent } from './presetation/talking-point/talking-point.component';
import { StartPresentationComponent } from './start-presentation/start-presentation.component';

const routes: Routes = [
  {
    path: '',
    component: LoginTemplateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateTalkingpointComponent },
      { path: 'setup', component: StartPresentationComponent },
    ],
  },
  {
    path: '',
    component: AnonymousTemplateComponent,
    children: [
      {
        path: 'presentation',
        component: PresetationComponent,
        children: [
          { path: '', redirectTo: 'countdown', pathMatch: 'full' },
          { path: 'countdown', component: CountdownComponent },
          { path: ':id', component: TalkingPointComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
})
export class LoggedInRoutingModule {
  static components = [
    HomeComponent,
    CreateTalkingpointComponent,
    StartPresentationComponent,
    PresetationComponent,
    CountdownComponent,
    TalkingPointComponent,
  ];
}
