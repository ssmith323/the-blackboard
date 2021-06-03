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
  // navList: NavLink[] = [{ label: 'Home', icon: 'home', link: 'home' }];

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
