import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../../services/auth.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve({ displayName: 'Stephen' }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AuthService, useValue: auth }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
