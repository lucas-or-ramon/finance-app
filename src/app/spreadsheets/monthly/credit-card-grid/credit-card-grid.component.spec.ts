import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardGridComponent } from './credit-card-grid.component';

describe('CreditCardGridComponent', () => {
  let component: CreditCardGridComponent;
  let fixture: ComponentFixture<CreditCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
