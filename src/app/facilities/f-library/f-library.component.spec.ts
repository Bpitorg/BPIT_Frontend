import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLibraryComponent } from './f-library.component';

describe('FLibraryComponent', () => {
  let component: FLibraryComponent;
  let fixture: ComponentFixture<FLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
