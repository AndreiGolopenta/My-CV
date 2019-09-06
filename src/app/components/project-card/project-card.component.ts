import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectCard } from 'src/app/models/contact-interface';
import { scale, fade } from 'src/app/animations/route-animations';

import { MatDialog } from '@angular/material/dialog';
import { ProjectScreenshotsComponent } from '../project-screenshots/project-screenshots.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [scale, fade],
})
export class ProjectCardComponent implements OnInit, OnChanges {
  onOff: boolean = false;
  interval: any;
  intervalAnim: any;
  index: number = 0;
  image: string;
  fadeInOut: boolean = false;
  timeToEvaluate: number;

  constructor(public dialog: MatDialog) {}

  @Input()
  detail: ProjectCard;

  ngOnInit() {
    this.image = this.detail.image[this.index];
  }

  ngOnChanges() {}

  enter() {
    this.onOff = true;
    this.interval = setTimeout(() => this.fadeAnimation(), 3000);
  }

  leave() {
    this.onOff = false;
    clearInterval(this.interval);
    clearTimeout(this.intervalAnim);
  }

  changeImage() {
    this.index++;
    this.index === this.detail.image.length ? (this.index = 0) : null;
    this.image = this.detail.image[this.index];
  }
 

  fadeAnimation() {
    this.fadeInOut = !this.fadeInOut;
    this.intervalAnim = setTimeout(() => this.animationCB(), 250);
  }

  animationCB() {
    if (this.fadeInOut) {
      this.changeImage();
      this.fadeAnimation();
    } else {
      this.interval = setTimeout(() => this.fadeAnimation(), 3000);
    }
  }

  openProjectScreenshots() {
    const dialogRef = this.dialog.open(ProjectScreenshotsComponent, {
      data: this.detail
    });
  }
}
