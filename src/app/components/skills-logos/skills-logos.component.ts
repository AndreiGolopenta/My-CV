import { Component, OnInit, Input } from '@angular/core';
import { Logo } from 'src/app/models/logo-interface';
import { scaleLogo } from 'src/app/animations/route-animations';

@Component({
  selector: 'app-skills-logos',
  templateUrl: './skills-logos.component.html',
  styleUrls: ['./skills-logos.component.scss'],
  animations: [scaleLogo]
})
export class SkillsLogosComponent implements OnInit {

  @Input()
  skills: Logo[];

  constructor() { }

  ngOnInit() {
  }

}
