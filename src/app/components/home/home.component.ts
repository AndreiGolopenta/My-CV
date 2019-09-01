import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  string: string = '';
  counter: number = 0;
  interval: any;

  dataBase: string[] = [
    '', '', '', '', '', '', 'a', 'm', ' ', 'A', 'n', 'd', 'r', 'e', 'i', '.', '', '', '', '', '', '',
    'w', 'a', 'n', 't', ' ', 't', 'o', ' ', 'b', 'e', 'c', 'o', 'm', 'e', ' ', 'a', ' ', 'F', 'r', 'o', 'n', 't', ' ', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.', '', '', '', '', '', '',
    ' ', '', '', '', '', '', '', 'M', 'o', 'b', 'i', 'l', 'e', ' ', 'a', 'p', 'p', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.', '', '', '', '', '', ''
  ];

  // Hey, I
  //        am Andrei.                              - length = 22
  //        want to become a Front end Developer.   - length = 43
  //                         Mobile app Developer.  - length = 34

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => this.startAnimation(), 100);
  }

  startAnimation() {
    if (this.counter < 22) {
      this.addToString(0);
    }
    if (this.counter >= 22 && this.counter < 44) {
      this.removeFromString();
    }
    if (this.counter >= 44 && this.counter < 87) {
      this.addToString(22);
    }
    if (this.counter >= 87 && this.counter < 107) {
      this.removeFromString();
    }
    if (this.counter >= 107 && this.counter < 140) {
      this.addToString(41);
    }
    if (this.counter >= 140 && this.counter < 178) {
      this.removeFromString();
    }
    if (this.counter === 178) {
      this.counter = 0;
    }
  }

  addToString(number: number) {
    this.string += this.dataBase[this.counter - number];
    this.counter++;
  }

  removeFromString() {
    this.string = this.string.substring(0, this.string.length - 1);
    this.counter++;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
