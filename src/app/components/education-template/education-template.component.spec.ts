import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTemplateComponent } from './education-template.component';

describe('EducationTemplateComponent', () => {
  let component: EducationTemplateComponent;
  let fixture: ComponentFixture<EducationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
