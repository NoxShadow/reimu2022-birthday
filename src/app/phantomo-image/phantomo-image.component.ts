import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phantomo-image',
  templateUrl: './phantomo-image.component.html',
  styleUrls: ['./phantomo-image.component.scss']
})
export class PhantomoImageComponent implements OnInit {

  @Input()
  public phantomoPath: string = '';

  @Input()
  public rotateRight = true;

  constructor() { }

  ngOnInit(): void {
  }

}
