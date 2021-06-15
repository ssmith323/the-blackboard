import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TalkingpointService } from '../services/talkingpoint.service';
import { ViewAllComponent } from './view-all.component';

@Component({
  selector: 'app-item',
  template: '<div></div>',
})
class ItemComponent {
  @Input() item: any;
}

describe('ViewAllComponent', () => {
  let component: ViewAllComponent;
  let fixture: ComponentFixture<ViewAllComponent>;

  const tpService = jasmine.createSpyObj(['getAll']);
  tpService.getAll.and.returnValue(of([]));

  const activatedRoute = { params: of({ id: 'test' }) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllComponent, ItemComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: TalkingpointService, useValue: tpService },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
