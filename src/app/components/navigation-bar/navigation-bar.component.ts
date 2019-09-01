import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnChanges {

  buttonValue: string;

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

}
