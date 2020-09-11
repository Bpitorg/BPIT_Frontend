import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DteamComponent } from './dteam.component';

describe('DteamComponent', () => {
  let component: DteamComponent;
  let fixture: ComponentFixture<DteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
