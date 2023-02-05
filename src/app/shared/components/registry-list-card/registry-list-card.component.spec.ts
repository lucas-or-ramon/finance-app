import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryListCardComponent } from './registry-list-card.component';

describe('RegistryListCardComponent', () => {
  let component: RegistryListCardComponent;
  let fixture: ComponentFixture<RegistryListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
