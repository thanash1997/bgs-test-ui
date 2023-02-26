import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPackagesComponent } from './client-packages.component';

describe('ClientPackagesComponent', () => {
  let component: ClientPackagesComponent;
  let fixture: ComponentFixture<ClientPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
