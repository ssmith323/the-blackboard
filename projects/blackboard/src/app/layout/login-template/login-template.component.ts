import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { NavLink } from './nav-link/nav-link.component';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
})
export class LoginTemplateComponent {
  isDarkMode = true;
  navList: NavLink[];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router,
  ) {
    this.navList = [
      {
        label: 'Home',
        icon: 'home',
        link: 'home',
      },
      {
        label: 'Create',
        icon: 'add',
        link: 'create',
      },
      {
        label: 'All New Faces',
        icon: 'person_add',
        link: 'view/new-faces',
      },
      {
        label: 'All Interestings',
        icon: 'interests',
        link: 'view/interestings',
      },
      {
        label: 'All Helps',
        icon: 'contact_support',
        link: 'view/helps',
      },
      {
        label: 'All Events',
        icon: 'event',
        link: 'view/events',
      },
      {
        label: 'All Shout-Outs',
        icon: 'campaign',
        link: 'view/shout-outs',
      },
      {
        label: 'Setup',
        icon: 'present_to_all',
        link: 'setup',
      },
    ];
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  async logout() {
    await this.auth.signout();
    this.router.navigateByUrl('/login');
  }
}
