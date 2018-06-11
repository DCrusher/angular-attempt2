import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-instance-dialog',
  templateUrl: './instance-dialog.component.html',
  styleUrls: ['./instance-dialog.component.css']
})
export class InstanceDialogComponent  {
  @ViewChild('dynamicForm')
  private dynamicForm: DynamicFormComponent;

  constructor(
    public dialogRef: MatDialogRef<InstanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(
      this.dynamicForm.getValues()
    );
  }
}
