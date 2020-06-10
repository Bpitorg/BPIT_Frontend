import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPubsComponent } from './s-pubs.component';

describe('SPubsComponent', () => {
  let component: SPubsComponent;
  let fixture: ComponentFixture<SPubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
