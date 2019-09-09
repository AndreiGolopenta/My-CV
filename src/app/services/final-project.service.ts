import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { ProjectCard } from '../models/contact-interface';
import { Logo } from '../models/logo-interface';

const PROJECTS_API = 'http://localhost:3000/projects';
const LOGO_API = 'http://localhost:3000/logo';

@Injectable({
  providedIn: 'root',
})
export class FinalProjectService {

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectCard[]> {
    return this.http.get<ProjectCard[]>(PROJECTS_API);
  }

  getLogos(): Observable<Logo[]> {
    return this.http.get<Logo[]>(LOGO_API);
  }

  private sendProjects = new BehaviorSubject([]);

  projects: Observable<ProjectCard[]> = this.sendProjects.asObservable();

  availableProjects(projects: ProjectCard[]) {
    return this.sendProjects.next(projects);
  }

  private sendLogos = new BehaviorSubject([]);

  logos: Observable<Logo[]> = this.sendLogos.asObservable();

  availableLogos(logos: Logo[]) {
    return this.sendLogos.next(logos);
  }

}
