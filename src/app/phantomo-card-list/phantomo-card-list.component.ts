import { Component, OnInit } from '@angular/core';
import { Phantomo } from '../model/phantomo';
import PhantomoJson from "../../assets/PhantomoData/PhantomoReplies.json";

@Component({
  selector: 'app-phantomo-card-list',
  templateUrl: './phantomo-card-list.component.html',
  styleUrls: ['./phantomo-card-list.component.scss']
})
export class PhantomoCardListComponent {

  public phantomos: Phantomo[] = [];

  constructor() {
    this.phantomos = PhantomoJson;
  }

  public phantomoImage(phantomoName: string): string {
    return `assets/birthday_phantomos/${phantomoName}`;
  }
}
