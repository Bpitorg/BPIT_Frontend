import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacehomeComponent } from './placehome.component';

describe('PlacehomeComponent', () => {
  let component: PlacehomeComponent;
  let fixture: ComponentFixture<PlacehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
