import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-icon',
  templateUrl: './twitter-icon.component.html',
  styleUrls: ['./twitter-icon.component.scss']
})
export class TwitterIconComponent implements OnInit {

  @Input()
  public twitterUrl = 'https://twitter.com/PhantomoGrave';

  constructor() { }

  ngOnInit(): void {
  }

}
