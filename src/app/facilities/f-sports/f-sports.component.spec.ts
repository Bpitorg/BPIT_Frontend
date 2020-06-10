import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSportsComponent } from './f-sports.component';

describe('FSportsComponent', () => {
  let component: FSportsComponent;
  let fixture: ComponentFixture<FSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
