import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePortalComponent } from './candidate-portal.component';

describe('CandidatePortalComponent', () => {
  let component: CandidatePortalComponent;
  let fixture: ComponentFixture<CandidatePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatePortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
