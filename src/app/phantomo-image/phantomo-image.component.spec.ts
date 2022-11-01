import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomoImageComponent } from './phantomo-image.component';

describe('PhantomoImageComponent', () => {
  let component: PhantomoImageComponent;
  let fixture: ComponentFixture<PhantomoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhantomoImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
