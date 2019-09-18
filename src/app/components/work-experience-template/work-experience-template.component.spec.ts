import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceTemplateComponent } from './work-experience-template.component';

describe('WorkExperienceTemplateComponent', () => {
  let component: WorkExperienceTemplateComponent;
  let fixture: ComponentFixture<WorkExperienceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
