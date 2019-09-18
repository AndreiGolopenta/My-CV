import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/models/education-interface';

@Component({
  selector: 'app-education-template',
  templateUrl: './education-template.component.html',
  styleUrls: ['./education-template.component.scss']
})
export class EducationTemplateComponent implements OnInit {

  @Input()
  education: Education;

  constructor() { }

  ngOnInit() {
  }

}
