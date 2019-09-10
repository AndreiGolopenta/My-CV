import { Component, OnInit, Input } from '@angular/core';
import { Title } from 'src/app/models/title-interface';
import { animateTittle } from 'src/app/animations/route-animations';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  animations: [animateTittle]
})
export class PageTitleComponent implements OnInit {

  @Input()
  title: Title;

  constructor() { }

  ngOnInit() {
  }

  titleAnimationStart(data: Title) {
    data.animate = true;
  }

  titleAnimationStop(data: Title) {
    data.animate = false;
  }
}
