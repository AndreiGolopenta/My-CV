import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/models/logo-interface';
import { FinalProjectService } from 'src/app/services/final-project.service';
import { skillCardAnimation, animateTittle } from 'src/app/animations/route-animations';
import { Title, Titles } from 'src/app/models/title-interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [skillCardAnimation, animateTittle],
})
export class SkillsComponent implements OnInit {
  logos: Logo[];
  listPosition: string = `${window.innerHeight / 4}px`;
  skillData: Logo;
  changeSkillDataAnimation: boolean = false;

  title: Title[];

  constructor(private finalProjectService: FinalProjectService) {}

  ngOnInit() {
    this.finalProjectService.logos.subscribe((data: Logo[]) => {
      this.logos = data;
      data.map((item: Logo) => {
        if (item.name === 'Angular') {
          this.skillData = item;
        }
      });
    });
    this.finalProjectService.title.subscribe((data: Titles) => {
      this.title = data.skills;
    })
  }

  activateAnimation(logo: Logo) {
    logo.animate = !logo.animate;
  }

  handleChange(data: Logo) {
    this.changeSkillDataAnimation = true;
    setTimeout(() => (this.skillData = data), 400);
    setTimeout(() => (this.changeSkillDataAnimation = false), 800);
  }

}
