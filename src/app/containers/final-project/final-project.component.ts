import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FinalProjectService } from '../../services/final-project.service';

import { myAnimation } from '../../animations/route-animations';

import { DialogAutoplayComponent } from 'src/app/components/dialog-autoplay/dialog-autoplay.component';
import { AutoplayMessageComponent } from '../../components/autoplay-message/autoplay-message.component';
import { ProjectCard } from 'src/app/models/contact-interface';

@Component({
  selector: 'app-final-project',
  templateUrl: './final-project.component.html',
  styleUrls: ['./final-project.component.scss'],
  animations: [myAnimation],
})
export class FinalProjectComponent implements OnInit {

  routes: string[] = ['/', '/work-education', '/skills', '/projects', '/contact'];
  counter: number;
  intervalAutoplay: any;
  autoplayStatus: boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private projectService: FinalProjectService,
    private _snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: ProjectCard[]) => {
      this.projectService.availableProjects(data);
    });

    document.onkeyup = event => {
      if (event.key === 'Escape') {
        clearInterval(this.intervalAutoplay);
        this.autoplayStatus = false;
        this._snackBar.dismiss();
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  handleAutoplay() {
    const dialogRef = this.dialog.open(DialogAutoplayComponent, { width: '350px' });
    dialogRef.componentInstance.autoplayAction.subscribe((data: number) => {
      dialogRef.afterClosed().subscribe(() => {
        this.checkCurentRoute();
        
        this._snackBar.openFromComponent(AutoplayMessageComponent);

        this.intervalAutoplay = setInterval(() => this.autoplay(), data * 1000);
        this.autoplayStatus = true;
      });
    });
  }

  checkCurentRoute() {
    for (let i = 0; i < this.routes.length; i++) {
      if (this.router.url === this.routes[i]) {
        this.counter = i;
      }
    }
  }

  autoplay() {
    this.counter === 5 ? this.counter = 0 : null;
    this.router.navigate([this.routes[this.counter]]);
    this.counter++;
  }
  
}



