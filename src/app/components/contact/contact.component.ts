import { Component, OnInit, OnDestroy } from '@angular/core';

import { Contact } from '../../models/contact-interface';

import { cardTransition } from '../../animations/route-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [cardTransition]
})

export class ContactComponent implements OnInit, OnDestroy {

  lat: number = 44.3189108;
  lng: number = 23.8044407;
  zoom: number = 17;
  latMarker: number = 44.3182082;
  lngMarker: number = 23.8031261;
  contactInfo: Contact[] = [
    { id: 1, icon: 'directions', data: 'Romania, Craiova, A. I. Cuza, Nr. 17.' },
    { id: 2, icon: 'email', data: 'andrei.golopenta@gmail.com' },
    { id: 3, icon: 'local_phone', data: '0723656128' }
  ];
  showContactCard: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.showContactCard = true, 1500);
  }

  ngOnDestroy() {
    this.showContactCard = false;
  }

}
