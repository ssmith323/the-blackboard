import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavLink, NavLinkComponent } from './nav-link.component';

@Component({
  selector: 'app-host',
  template: '<app-nav-link [nav]="nav"></app-nav-link>',
})
class HostComponent {
  nav: NavLink = {
    icon: 'icon',
    label: 'Label',
    link: 'link',
  };
}

describe('NavLinkComponent', () => {
  let component: NavLinkComponent;
  let fixture: ComponentFixture<NavLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavLinkComponent, HostComponent],
        imports: [RouterTestingModule, MatIconModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.debugElement.query(
      By.directive(NavLinkComponent),
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the label inside a link', () => {
    expect(
      fixture.debugElement.query(By.css('a span')).nativeElement.innerText,
    ).toBe('Label');
  });
});