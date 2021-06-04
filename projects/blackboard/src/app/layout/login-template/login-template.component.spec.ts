import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../services/auth.service';
import { LoginTemplateComponent } from './login-template.component';

@Component({
  selector: 'app-nav-link',
  template: '{{nav.label}}',
})
class NavLinkComponent {
  @Input() nav: any;
}

describe('LoginTemplateComponent', () => {
  let component: LoginTemplateComponent;
  let fixture: ComponentFixture<LoginTemplateComponent>;

  const auth = jasmine.createSpyObj(['signout']);
  auth.signout.and.returnValue(Promise.resolve());

  const router = jasmine.createSpyObj(['navigateByUrl']);
  router.navigateByUrl.and.returnValue();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginTemplateComponent, NavLinkComponent],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change dark mode', () => {
    fixture.debugElement.query(By.css('#darkModeButton')).nativeElement.click();

    expect(component.isDarkMode).toBeFalse();
  });

  it('should change dark mode', () => {
    fixture.debugElement.query(By.css('#logoutButton')).nativeElement.click();

    expect(auth.signout).toHaveBeenCalled();
  });
});
