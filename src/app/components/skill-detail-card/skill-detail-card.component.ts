import { Component, OnInit, Input } from '@angular/core';
import { Logo } from 'src/app/models/logo-interface';

@Component({
  selector: 'app-skill-detail-card',
  templateUrl: './skill-detail-card.component.html',
  styleUrls: ['./skill-detail-card.component.scss'],
})
export class SkillDetailCardComponent implements OnInit {
  @Input()
  data: Logo;

  constructor() {}

  ngOnInit() {}
}
