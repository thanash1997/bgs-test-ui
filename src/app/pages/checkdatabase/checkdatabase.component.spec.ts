import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdatabaseComponent } from './checkdatabase.component';

describe('CheckdatabaseComponent', () => {
  let component: CheckdatabaseComponent;
  let fixture: ComponentFixture<CheckdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
