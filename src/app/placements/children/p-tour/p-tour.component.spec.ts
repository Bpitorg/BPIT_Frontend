import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTourComponent } from './p-tour.component';

describe('PTourComponent', () => {
  let component: PTourComponent;
  let fixture: ComponentFixture<PTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
