import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DLabComponent } from './d-lab.component';

describe('DLabComponent', () => {
  let component: DLabComponent;
  let fixture: ComponentFixture<DLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
