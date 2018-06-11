import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-instance-dialog',
  templateUrl: './instance-dialog.component.html',
  styleUrls: ['./instance-dialog.component.css']
})
export class InstanceDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<InstanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
