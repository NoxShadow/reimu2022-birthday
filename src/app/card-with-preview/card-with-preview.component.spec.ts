import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithPreviewComponent } from './card-with-preview.component';

describe('CardWithPreviewComponent', () => {
  let component: CardWithPreviewComponent;
  let fixture: ComponentFixture<CardWithPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
