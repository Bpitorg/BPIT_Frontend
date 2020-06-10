import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCanteenComponent } from './f-canteen.component';

describe('FCanteenComponent', () => {
  let component: FCanteenComponent;
  let fixture: ComponentFixture<FCanteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCanteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCanteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
