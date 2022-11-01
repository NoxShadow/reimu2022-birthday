import { Component, Input, OnInit } from '@angular/core';

const PHANTOMO_BACKGROUND_CLASS = 'phantomo-card-background-';

@Component({
  selector: 'app-phantomo-card',
  templateUrl: './phantomo-card.component.html',
  styleUrls: ['./phantomo-card.component.scss']
})
export class PhantomoCardComponent implements OnInit {

  @Input()
  public name = '';

  @Input()
  public message = '';

  @Input()
  public phantomo = '';

  @Input()
  public graveType = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public get graveBackgroundClass(): string {
    return `${PHANTOMO_BACKGROUND_CLASS}${this.graveType}`;
  }

}
