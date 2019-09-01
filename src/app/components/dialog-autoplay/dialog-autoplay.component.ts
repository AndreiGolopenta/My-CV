import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-autoplay',
  templateUrl: './dialog-autoplay.component.html',
  styleUrls: ['./dialog-autoplay.component.scss']
})
export class DialogAutoplayComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogAutoplayComponent>) { }

  ngOnInit() {
  }

  autoplayAction: EventEmitter<number> = new EventEmitter<number>();

  onNoClick(): void {
    this.dialogRef.close();
  }

  activateAutoplay(inputSeconds: number) {
    this.autoplayAction.emit(inputSeconds);
  }
}
