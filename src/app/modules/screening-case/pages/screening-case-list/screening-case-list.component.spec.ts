import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCaseListComponent } from './screening-case-list.component';

describe('ScreeningCaseListComponent', () => {
  let component: ScreeningCaseListComponent;
  let fixture: ComponentFixture<ScreeningCaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningCaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
