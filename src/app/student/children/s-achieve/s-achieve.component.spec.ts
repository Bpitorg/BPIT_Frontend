import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAchieveComponent } from './s-achieve.component';

describe('SAchieveComponent', () => {
  let component: SAchieveComponent;
  let fixture: ComponentFixture<SAchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
