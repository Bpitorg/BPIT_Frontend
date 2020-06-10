import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACertiComponent } from './a-certi.component';

describe('ACertiComponent', () => {
  let component: ACertiComponent;
  let fixture: ComponentFixture<ACertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
