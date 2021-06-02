import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
})
export class LoginTemplateComponent {
  isDarkMode = true;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  // navList: NavLink[] = [{ label: 'Home', icon: 'home', link: 'home' }];

  constructor(private breakpointObserver: BreakpointObserver) {}

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}
