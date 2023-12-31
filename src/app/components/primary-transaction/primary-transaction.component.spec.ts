import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTransactionComponent } from './primary-transaction.component';

describe('PrimaryTransactionComponent', () => {
  let component: PrimaryTransactionComponent;
  let fixture: ComponentFixture<PrimaryTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryTransactionComponent]
    });
    fixture = TestBed.createComponent(PrimaryTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
