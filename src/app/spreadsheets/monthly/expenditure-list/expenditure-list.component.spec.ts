import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureListComponent } from './expenditure-list.component';

describe('ExpenditureListComponent', () => {
  let component: ExpenditureListComponent;
  let fixture: ComponentFixture<ExpenditureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
