import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLogosComponent } from './skills-logos.component';

describe('SkillsLogosComponent', () => {
  let component: SkillsLogosComponent;
  let fixture: ComponentFixture<SkillsLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
