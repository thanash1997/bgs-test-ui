import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCaseFormComponent } from './screening-case-form.component';

describe('ScreeningCaseFormComponent', () => {
  let component: ScreeningCaseFormComponent;
  let fixture: ComponentFixture<ScreeningCaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningCaseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningCaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
