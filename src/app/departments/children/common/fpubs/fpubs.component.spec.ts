import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFpubsComponent } from './d-fpubs.component';

describe('DFpubsComponent', () => {
  let component: DFpubsComponent;
  let fixture: ComponentFixture<DFpubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFpubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFpubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
