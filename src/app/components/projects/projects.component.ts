import { Component, OnInit } from '@angular/core';
import { FinalProjectService } from 'src/app/services/final-project.service';
import { ProjectCard } from 'src/app/models/contact-interface';
import { Title } from 'src/app/models/title-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectCard[];

  title: Title[] = [
    {id: 1, char: 'P', animate: false},
    {id: 1, char: 'r', animate: false},
    {id: 1, char: 'o', animate: false},
    {id: 1, char: 'j', animate: false},
    {id: 1, char: 'e', animate: false},
    {id: 1, char: 'c', animate: false},
    {id: 1, char: 't', animate: false},
    {id: 1, char: 's', animate: false},
  ];

  constructor(private projectService: FinalProjectService) { }

  ngOnInit() {
    this.projectService.projects.subscribe((data: ProjectCard[]) => {
      this.projects = data;
    });
  }

}
