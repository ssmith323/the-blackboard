import { NgModule } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AnonymousTemplateComponent } from '../layout/anonymous-template/anonymous-template.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginTemplateComponent } from '../layout/login-template/login-template.component';
import { CreateTalkingpointComponent } from './create-talkingpoint/create-talkingpoint.component';
import { HomeComponent } from './home/home.component';
import { EditGuard } from './layout/edit.guard';
import { PresentationGuard } from './layout/presentation.guard';
import { CountdownComponent } from './presentation/countdown/countdown.component';
import { PresentationComponent } from './presentation/presentation.component';
import { StrechComponent } from './presentation/strech/strech.component';
import { TalkingPointComponent } from './presentation/talking-point/talking-point.component';
import { StartPresentationComponent } from './start-presentation/start-presentation.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routes: Routes = [
  {
    path: '',
    component: LoginTemplateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateTalkingpointComponent },
      { path: 'setup', component: StartPresentationComponent },
      { path: 'view/:id', component: ViewAllComponent },
      { 
        path: 'view/:id/:key', 
        component: CreateTalkingpointComponent,
        canActivate: [EditGuard] 
      },
    ],
  },
  {
    path: '',
    component: AnonymousTemplateComponent,
    children: [
      {
        path: 'presentation',
        component: PresentationComponent,
        children: [
          { path: '', redirectTo: 'countdown', pathMatch: 'full' },
          { path: 'countdown', component: CountdownComponent },
          { path: 'strech', component: StrechComponent },
          { path: ':id', component: TalkingPointComponent },
        ],
        canActivate: [PresentationGuard],
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
    PresentationComponent,
    CountdownComponent,
    TalkingPointComponent,
    ViewAllComponent,
  ];
}
