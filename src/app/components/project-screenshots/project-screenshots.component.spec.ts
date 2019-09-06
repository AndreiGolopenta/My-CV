import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectScreenshotsComponent } from './project-screenshots.component';

describe('ProjectScreenshotsComponent', () => {
  let component: ProjectScreenshotsComponent;
  let fixture: ComponentFixture<ProjectScreenshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectScreenshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
