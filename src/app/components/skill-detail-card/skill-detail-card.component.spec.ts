import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailCardComponent } from './skill-detail-card.component';

describe('SkillDetailCardComponent', () => {
  let component: SkillDetailCardComponent;
  let fixture: ComponentFixture<SkillDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
