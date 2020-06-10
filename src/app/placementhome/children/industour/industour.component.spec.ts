import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustourComponent } from './industour.component';

describe('IndustourComponent', () => {
  let component: IndustourComponent;
  let fixture: ComponentFixture<IndustourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
