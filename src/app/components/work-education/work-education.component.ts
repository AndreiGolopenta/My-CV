import { Component, OnInit } from '@angular/core';
import { Title, Titles } from 'src/app/models/title-interface';
import { FinalProjectService } from 'src/app/services/final-project.service';

@Component({
  selector: 'app-work-education',
  templateUrl: './work-education.component.html',
  styleUrls: ['./work-education.component.scss'],
})
export class WorkEducationComponent implements OnInit {

  title: Title[];

  constructor(private finalProjectService: FinalProjectService) {}

  ngOnInit() {
    this.finalProjectService.title.subscribe((data: Titles) => {
      this.title = data.workEducation;
    });
  }
}
