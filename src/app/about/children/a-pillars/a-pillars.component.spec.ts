import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APillarsComponent } from './a-pillars.component';

describe('APillarsComponent', () => {
  let component: APillarsComponent;
  let fixture: ComponentFixture<APillarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APillarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APillarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
