import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { ProjectCard } from '../models/contact-interface';

const PROJECTS_API = 'http://localhost:3000/projects';

@Injectable({
  providedIn: 'root',
})
export class FinalProjectService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectCard[]> {
    return this.http.get<ProjectCard[]>(PROJECTS_API);
  }

  private sendProjects = new BehaviorSubject([]);

  projects: Observable<ProjectCard[]> = this.sendProjects.asObservable();

  availableProjects(projects: ProjectCard[]) {
    return this.sendProjects.next(projects);
  }
}
