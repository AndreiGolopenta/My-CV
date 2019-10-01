import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { ProjectCard } from '../models/contact-interface';
import { Logo } from '../models/logo-interface';
import { Titles } from '../models/title-interface';
import { EducationWork } from '../models/education-work-interface';

const PROJECTS_API = 'http://localhost:3000/projects';
const LOGO_API = 'http://localhost:3000/logo';
const TITLE_API = 'http://localhost:3000/title';
const EDUCATION_WORK = 'http://localhost:3000/personalData';

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

  getPersonalData(): Observable<EducationWork> {
    return this.http.get<EducationWork>(EDUCATION_WORK);
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

  private sendPersonalData = new BehaviorSubject({education: [], jobs: []});

  personalData: Observable<EducationWork> = this.sendPersonalData.asObservable();

  availablePersonalData(personalData: EducationWork) {
    return this.sendPersonalData.next(personalData);
  }

}
