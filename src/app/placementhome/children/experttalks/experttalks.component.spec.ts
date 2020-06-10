import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperttalksComponent } from './experttalks.component';

describe('ExperttalksComponent', () => {
  let component: ExperttalksComponent;
  let fixture: ComponentFixture<ExperttalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperttalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperttalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
