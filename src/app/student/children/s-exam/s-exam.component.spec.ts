import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SExamComponent } from './s-exam.component';

describe('SExamComponent', () => {
  let component: SExamComponent;
  let fixture: ComponentFixture<SExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
