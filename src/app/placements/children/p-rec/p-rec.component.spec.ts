import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRecComponent } from './p-rec.component';

describe('PRecComponent', () => {
  let component: PRecComponent;
  let fixture: ComponentFixture<PRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
