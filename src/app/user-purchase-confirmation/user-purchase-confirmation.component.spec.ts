import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseConfirmationComponent } from './user-purchase-confirmation.component';

describe('UserPurchaseConfirmationComponent', () => {
  let component: UserPurchaseConfirmationComponent;
  let fixture: ComponentFixture<UserPurchaseConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchaseConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPurchaseConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
