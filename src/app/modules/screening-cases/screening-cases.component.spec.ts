import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCasesComponent } from './screening-cases.component';

describe('ScreeningCasesComponent', () => {
  let component: ScreeningCasesComponent;
  let fixture: ComponentFixture<ScreeningCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
