import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestScreeningComponent } from './request-screening.component';

describe('RequestScreeningComponent', () => {
  let component: RequestScreeningComponent;
  let fixture: ComponentFixture<RequestScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestScreeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
