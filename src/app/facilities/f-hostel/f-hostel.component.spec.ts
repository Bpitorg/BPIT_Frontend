import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FHostelComponent } from './f-hostel.component';

describe('FHostelComponent', () => {
  let component: FHostelComponent;
  let fixture: ComponentFixture<FHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
