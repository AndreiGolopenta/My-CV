import { Component, OnInit } from '@angular/core';
import { FinalProjectService } from 'src/app/services/final-project.service';
import { ProjectCard } from 'src/app/models/contact-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectCard[];

  constructor(private projectService: FinalProjectService) { }

  ngOnInit() {
    this.projectService.projects.subscribe((data: ProjectCard[]) => {
      this.projects = data;
    });
  }

}
