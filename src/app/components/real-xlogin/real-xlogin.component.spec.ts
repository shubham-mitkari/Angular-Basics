import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealXloginComponent } from './real-xlogin.component';

describe('RealXloginComponent', () => {
  let component: RealXloginComponent;
  let fixture: ComponentFixture<RealXloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealXloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealXloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
