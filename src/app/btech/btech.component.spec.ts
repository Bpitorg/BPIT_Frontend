import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtechComponent } from './btech.component';

describe('BtechComponent', () => {
  let component: BtechComponent;
  let fixture: ComponentFixture<BtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
