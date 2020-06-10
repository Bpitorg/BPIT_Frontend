import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSocietyComponent } from './s-society.component';

describe('SSocietyComponent', () => {
  let component: SSocietyComponent;
  let fixture: ComponentFixture<SSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
