import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATrustComponent } from './a-trust.component';

describe('ATrustComponent', () => {
  let component: ATrustComponent;
  let fixture: ComponentFixture<ATrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
