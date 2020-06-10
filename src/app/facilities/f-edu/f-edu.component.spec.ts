import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FEduComponent } from './f-edu.component';

describe('FEduComponent', () => {
  let component: FEduComponent;
  let fixture: ComponentFixture<FEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
