import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-row',
  templateUrl: './credit-row.component.html',
  styleUrls: ['./credit-row.component.scss']
})
export class CreditRowComponent implements OnInit {

  @Input()
  public projectRole = '';

  @Input()
  public contributorName = '';

  @Input()
  public twitterUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
