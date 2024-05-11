import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-poup-message',
  templateUrl: './poup-message.component.html',
  styleUrls: ['./poup-message.component.scss']
})
export class PoupMessageComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<PoupMessageComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
