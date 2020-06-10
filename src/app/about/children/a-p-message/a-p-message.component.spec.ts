import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APMessageComponent } from './a-p-message.component';

describe('APMessageComponent', () => {
  let component: APMessageComponent;
  let fixture: ComponentFixture<APMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
