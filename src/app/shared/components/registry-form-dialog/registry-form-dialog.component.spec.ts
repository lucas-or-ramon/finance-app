import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryFormDialogComponent } from './registry-form-dialog.component';

describe('RegistryFormDialogComponent', () => {
  let component: RegistryFormDialogComponent;
  let fixture: ComponentFixture<RegistryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
