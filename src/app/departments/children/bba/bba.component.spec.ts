import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbaComponent } from './bba.component';

describe('BbaComponent', () => {
  let component: BbaComponent;
  let fixture: ComponentFixture<BbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
