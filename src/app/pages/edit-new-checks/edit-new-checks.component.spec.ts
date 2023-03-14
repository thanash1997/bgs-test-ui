import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewChecksComponent } from './edit-new-checks.component';

describe('EditNewChecksComponent', () => {
  let component: EditNewChecksComponent;
  let fixture: ComponentFixture<EditNewChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewChecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNewChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
