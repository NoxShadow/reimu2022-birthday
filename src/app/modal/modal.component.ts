import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public imageSource = '';

  public showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  public open() {
    this.showModal = true;
  }

  public close() {
    this.showModal = false;
  }

}
