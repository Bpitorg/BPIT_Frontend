import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SProjectsComponent } from './s-projects.component';

describe('SProjectsComponent', () => {
  let component: SProjectsComponent;
  let fixture: ComponentFixture<SProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
