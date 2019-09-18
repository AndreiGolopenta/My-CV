import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience-interface';


@Component({
  selector: 'app-work-experience-template',
  templateUrl: './work-experience-template.component.html',
  styleUrls: ['./work-experience-template.component.scss']
})
export class WorkExperienceTemplateComponent implements OnInit {

  @Input()
  job: WorkExperience[];

  constructor() { }

  ngOnInit() {
  }

}
