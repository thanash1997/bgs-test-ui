import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileLayoutComponent } from './client-profile-layout.component';

describe('ClientProfileLayoutComponent', () => {
  let component: ClientProfileLayoutComponent;
  let fixture: ComponentFixture<ClientProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
