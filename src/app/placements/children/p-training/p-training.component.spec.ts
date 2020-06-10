import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTrainingComponent } from './p-training.component';

describe('PTrainingComponent', () => {
  let component: PTrainingComponent;
  let fixture: ComponentFixture<PTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
