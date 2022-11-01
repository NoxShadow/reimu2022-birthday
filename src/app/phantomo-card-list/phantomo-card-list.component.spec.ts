import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomoCardListComponent } from './phantomo-card-list.component';

describe('PhantomoCardListComponent', () => {
  let component: PhantomoCardListComponent;
  let fixture: ComponentFixture<PhantomoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomoCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
