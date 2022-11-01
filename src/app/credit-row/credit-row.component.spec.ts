import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRowComponent } from './credit-row.component';

describe('CreditRowComponent', () => {
  let component: CreditRowComponent;
  let fixture: ComponentFixture<CreditRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
