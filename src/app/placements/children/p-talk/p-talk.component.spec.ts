import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTalkComponent } from './p-talk.component';

describe('PTalkComponent', () => {
  let component: PTalkComponent;
  let fixture: ComponentFixture<PTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
