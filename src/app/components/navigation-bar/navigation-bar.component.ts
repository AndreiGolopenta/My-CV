import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnChanges {

  buttonValue: string;
  gitHubLogo: string[] = ['assets/GitHub-logo/GitHub.png', 'assets/GitHub-logo/GitHub-selected.png']
  logoIndex: number = 0;

  @Input()
  currentRoute: number;

  @Input()
  autoplayStatus: boolean;

  @Output()
  autoplay = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
    this.buttonValue = '/';
  }

  ngOnChanges() {
    this.buttonValue = this.router.url;
  }

  autoplayOnOff() {
    this.autoplay.emit();
  }

  changeLogo(value: string) {
    value === 'select' ? this.logoIndex = 1 : this.logoIndex = 0;
  }

}
