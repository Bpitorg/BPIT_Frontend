import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaComponent } from './mba.component';

describe('MbaComponent', () => {
  let component: MbaComponent;
  let fixture: ComponentFixture<MbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
