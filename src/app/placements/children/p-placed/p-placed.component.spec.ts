import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPlacedComponent } from './p-placed.component';

describe('PPlacedComponent', () => {
  let component: PPlacedComponent;
  let fixture: ComponentFixture<PPlacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPlacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
