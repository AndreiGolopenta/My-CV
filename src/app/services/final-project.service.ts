import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { ProjectCard } from '../models/contact-interface';
import { Logo } from '../models/logo-interface';
import { Titles, Title } from '../models/title-interface';

const PROJECTS_API = 'http://localhost:3000/projects';
const LOGO_API = 'http://localhost:3000/logo';
const TITLE_API = 'http://localhost:3000/title';

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

  getTitles(): Observable<Titles> {
    return this.http.get<Titles>(TITLE_API);
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

  private sendTitle = new BehaviorSubject({workEducation: [], skills: [], projects: []});

  title: Observable<Titles> = this.sendTitle.asObservable();

  availableTitles(title: Titles) {
    return this.sendTitle.next(title);
  }

}
