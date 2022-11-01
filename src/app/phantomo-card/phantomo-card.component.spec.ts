import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomoCardComponent } from './phantomo-card.component';

describe('PhantomoCardComponent', () => {
  let component: PhantomoCardComponent;
  let fixture: ComponentFixture<PhantomoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
