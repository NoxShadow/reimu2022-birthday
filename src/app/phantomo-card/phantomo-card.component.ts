import { Component, Input, OnInit } from '@angular/core';

const PHANTOMO_BACKGROUND_CLASS = 'phantomo-card-background-';

const AMOGUS_NOISES_LOCATION_PATHS = ['assets/SoundEffects/RoleReveal.mp3', 'assets/SoundEffects/EmergencyMeeting.mp3', 'assets/SoundEffects/ReportingBody.mp3'];

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

  public playSussySound(): void {
    if (this.phantomo.indexOf('tubambam') < 0) {
      return;
    }

    const soundPath = AMOGUS_NOISES_LOCATION_PATHS[Math.floor(Math.random() * AMOGUS_NOISES_LOCATION_PATHS.length)];

    const audio = new Audio();
    audio.src = soundPath;
    audio.volume = 0.5;
    audio.load();
    audio.play();
  }

}
