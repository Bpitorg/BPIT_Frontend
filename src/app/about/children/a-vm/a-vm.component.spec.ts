import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVmComponent } from './a-vm.component';

describe('AVmComponent', () => {
  let component: AVmComponent;
  let fixture: ComponentFixture<AVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
