import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBookComponent } from './f-book.component';

describe('FBookComponent', () => {
  let component: FBookComponent;
  let fixture: ComponentFixture<FBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
