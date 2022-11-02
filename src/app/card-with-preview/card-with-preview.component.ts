import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-with-preview',
  templateUrl: './card-with-preview.component.html',
  styleUrls: ['./card-with-preview.component.scss']
})
export class CardWithPreviewComponent implements OnInit {

  @ViewChild("octaneModal")
  public octaneModal?: ModalComponent;

  @ViewChild("phantomosModal")
  public phantomosModal?: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public clickBirthdayPhantomo(): void {
    this.phantomosModal?.open();
  }

  public clickOctanePhantomo(): void {
    this.octaneModal?.open();
  }

}
