import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementhomeComponent } from './placementhome.component';

describe('PlacementhomeComponent', () => {
  let component: PlacementhomeComponent;
  let fixture: ComponentFixture<PlacementhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
