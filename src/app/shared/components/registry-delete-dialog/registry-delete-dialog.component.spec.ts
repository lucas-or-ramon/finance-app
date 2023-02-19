import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryDeleteDialogComponent } from './registry-delete-dialog.component';

describe('RegistryDeleteDialogComponent', () => {
  let component: RegistryDeleteDialogComponent;
  let fixture: ComponentFixture<RegistryDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
