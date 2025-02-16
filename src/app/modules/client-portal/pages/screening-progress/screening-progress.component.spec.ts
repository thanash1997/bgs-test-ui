import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningProgressComponent } from './screening-progress.component';

describe('ScreeningProgressComponent', () => {
  let component: ScreeningProgressComponent;
  let fixture: ComponentFixture<ScreeningProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
