import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLogReportComponent } from './system-log-report.component';

describe('SystemLogReportComponent', () => {
  let component: SystemLogReportComponent;
  let fixture: ComponentFixture<SystemLogReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemLogReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
