import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEventsComponent } from './s-events.component';

describe('SEventsComponent', () => {
  let component: SEventsComponent;
  let fixture: ComponentFixture<SEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
