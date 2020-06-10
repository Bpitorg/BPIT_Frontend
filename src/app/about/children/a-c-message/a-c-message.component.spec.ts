import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACMessageComponent } from './a-c-message.component';

describe('ACMessageComponent', () => {
  let component: ACMessageComponent;
  let fixture: ComponentFixture<ACMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
