import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectCard } from 'src/app/models/contact-interface';
import { fadeInOut } from '../../animations/route-animations';

@Component({
  selector: 'app-project-screenshots',
  templateUrl: './project-screenshots.component.html',
  styleUrls: ['./project-screenshots.component.scss'],
  animations: [fadeInOut]
})
export class ProjectScreenshotsComponent implements OnInit {
  imageIndex: number = 0;
  fadeState: boolean = false;
  action: string = '';

  constructor(
    public dialogRef: MatDialogRef<ProjectScreenshotsComponent>,
    @Inject(MAT_DIALOG_DATA) public project: ProjectCard
  ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeImage(action: string) {
    this.fadeState = !this.fadeState;
    this.action = action;
  }

  next() {
    this.imageIndex === this.project.image.length - 1
      ? (this.imageIndex = 0)
      : this.imageIndex++;
  }

  prev() {
    this.imageIndex === 0
      ? (this.imageIndex = this.project.image.length - 1)
      : this.imageIndex--;
  }

  animationIsDone() {
    if (this.action === 'next') {
      this.next();
      this.action = 'none';
      this.fadeState = !this.fadeState;
    }
    if (this.action === 'prev') {
      this.prev();
      this.action = 'none';
      this.fadeState = !this.fadeState;
    }
  }
}
