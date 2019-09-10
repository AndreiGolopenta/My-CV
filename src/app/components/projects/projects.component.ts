import { Component, OnInit } from '@angular/core';
import { FinalProjectService } from 'src/app/services/final-project.service';
import { ProjectCard } from 'src/app/models/contact-interface';
import { Title, Titles } from 'src/app/models/title-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectCard[];

  title: Title[];

  constructor(private projectService: FinalProjectService) { }

  ngOnInit() {
    this.projectService.projects.subscribe((data: ProjectCard[]) => {
      this.projects = data;
    });

    this.projectService.title.subscribe((data: Titles) => {
      this.title = data.projects;
    });
  }

}
