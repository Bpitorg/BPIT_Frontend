import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { huComponent } from './hu.component';

describe('huComponent', () => {
  let component: huComponent;
  let fixture: ComponentFixture<huComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ huComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(huComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
