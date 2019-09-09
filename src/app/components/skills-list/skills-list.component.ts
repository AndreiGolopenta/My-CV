import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Logo } from 'src/app/models/logo-interface';
import { skillsAnimation } from 'src/app/animations/route-animations';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  animations: [skillsAnimation],
})
export class SkillsListComponent implements OnInit {
  @Input()
  skills: Logo[];

  @Output()
  animate: EventEmitter<Logo> = new EventEmitter<Logo>();

  @Output()
  changeSkillCard: EventEmitter<Logo> = new EventEmitter<Logo>();

  constructor() {}

  ngOnInit() {}

  animationStart(skill: Logo) {
    this.animate.emit(skill);
  }

  animationStop(skill: Logo) {
    this.animate.emit(skill);
  }

  changeCard(skill: Logo) {
    if (skill.name === 'React' || skill.name === 'Angular') {
      this.changeSkillCard.emit(skill);
    }
  }
}
