import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenRegistrationComponent } from './kitchen-registration.component';

describe('KitchenRegistrationComponent', () => {
  let component: KitchenRegistrationComponent;
  let fixture: ComponentFixture<KitchenRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
