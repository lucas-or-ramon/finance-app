import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueExpenditureGridComponent } from './revenue-expenditure-grid.component';

describe('RevenueExpenditureGridComponent', () => {
  let component: RevenueExpenditureGridComponent;
  let fixture: ComponentFixture<RevenueExpenditureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueExpenditureGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueExpenditureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
