import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';
import { ItemComponent } from './item.component';

@Component({
  selector: 'app-host',
  template: '<app-item [item]="item"></app-item>',
})
class HostComponent {
  item = {};
}

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<HostComponent>;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve({ uid: '1' }));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent, HostComponent],
      providers: [{ provide: AuthService, useValue: auth }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.debugElement.query(
      By.directive(ItemComponent),
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
