import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTransactionComponent } from './savings-transaction.component';

describe('SavingsTransactionComponent', () => {
  let component: SavingsTransactionComponent;
  let fixture: ComponentFixture<SavingsTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsTransactionComponent]
    });
    fixture = TestBed.createComponent(SavingsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
