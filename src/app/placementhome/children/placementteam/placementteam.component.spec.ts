import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementteamComponent } from './placementteam.component';

describe('PlacementteamComponent', () => {
  let component: PlacementteamComponent;
  let fixture: ComponentFixture<PlacementteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
