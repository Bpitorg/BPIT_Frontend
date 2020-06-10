import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSportsComponent } from './s-sports.component';

describe('SSportsComponent', () => {
  let component: SSportsComponent;
  let fixture: ComponentFixture<SSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
