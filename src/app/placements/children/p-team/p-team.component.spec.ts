import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamComponent } from './p-team.component';

describe('PTeamComponent', () => {
  let component: PTeamComponent;
  let fixture: ComponentFixture<PTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
