import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentplacedComponent } from './studentplaced.component';

describe('StudentplacedComponent', () => {
  let component: StudentplacedComponent;
  let fixture: ComponentFixture<StudentplacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentplacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
