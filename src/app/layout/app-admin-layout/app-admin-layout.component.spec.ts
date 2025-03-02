import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppAdminLayoutComponent } from './app-admin-layout.component';

describe('AppAdminLayoutComponent', () => {
  let component: AppAdminLayoutComponent;
  let fixture: ComponentFixture<AppAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
