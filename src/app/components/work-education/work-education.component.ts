import { Component, OnInit, Input } from '@angular/core';
import { Title, Titles } from 'src/app/models/title-interface';
import { FinalProjectService } from 'src/app/services/final-project.service';
import { Education } from 'src/app/models/education-interface';
import { WorkExperience } from 'src/app/models/work-experience-interface';
import { EducationWork } from 'src/app/models/education-work-interface';

@Component({
  selector: 'app-work-education',
  templateUrl: './work-education.component.html',
  styleUrls: ['./work-education.component.scss'],
})
export class WorkEducationComponent implements OnInit {

  title: Title[];

  education: Education[];

  jobs : WorkExperience[];

  value: number;

  constructor(private finalProjectService: FinalProjectService) {}

  ngOnInit() {
    this.finalProjectService.title.subscribe((data: Titles) => {
      this.title = data.workEducation;
    });
    this.finalProjectService.personalData.subscribe((data: EducationWork) => {
      this.education = data.education;
      this.jobs = data.jobs;
      this.value = this.jobs.length - 1;
    })
  }
}
