import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewChecksComponent } from './add-new-checks.component';

describe('AddNewChecksComponent', () => {
  let component: AddNewChecksComponent;
  let fixture: ComponentFixture<AddNewChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewChecksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
