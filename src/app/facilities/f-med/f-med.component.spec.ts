import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMedComponent } from './f-med.component';

describe('FMedComponent', () => {
  let component: FMedComponent;
  let fixture: ComponentFixture<FMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
