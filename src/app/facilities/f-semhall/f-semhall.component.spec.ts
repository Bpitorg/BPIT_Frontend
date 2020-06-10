import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSemhallComponent } from './f-semhall.component';

describe('FSemhallComponent', () => {
  let component: FSemhallComponent;
  let fixture: ComponentFixture<FSemhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSemhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSemhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
