import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { AppComponent } from './app.component';

// containers
import { FinalProjectComponent } from './containers/final-project/final-project.component';

// components
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkEducationComponent } from './components/work-education/work-education.component';
import { DialogAutoplayComponent } from './components/dialog-autoplay/dialog-autoplay.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { AutoplayMessageComponent } from './components/autoplay-message/autoplay-message.component';
import { ProjectScreenshotsComponent } from './components/project-screenshots/project-screenshots.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { SkillsLogosComponent } from './components/skills-logos/skills-logos.component';
import { SkillDetailCardComponent } from './components/skill-detail-card/skill-detail-card.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'work-education', component: WorkEducationComponent, data: {animation: 'workEducation'} },
  { path: 'skills',  component: SkillsComponent, data: { animation: 'skills' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } }
];

@NgModule({
  declarations: [
    AppComponent,
    FinalProjectComponent,
    ContactComponent,
    HomeComponent,
    NavigationBarComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkEducationComponent,
    DialogAutoplayComponent,
    ProjectCardComponent,
    AutoplayMessageComponent,
    ProjectScreenshotsComponent,
    SkillsListComponent,
    SkillsLogosComponent,
    SkillDetailCardComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: ''}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogAutoplayComponent,
    AutoplayMessageComponent,
    ProjectScreenshotsComponent
  ]
})
export class AppModule {}
