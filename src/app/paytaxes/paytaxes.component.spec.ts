import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytaxesComponent } from './paytaxes.component';

describe('PaytaxesComponent', () => {
  let component: PaytaxesComponent;
  let fixture: ComponentFixture<PaytaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaytaxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaytaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
