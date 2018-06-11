import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { InstanceDialogComponent } from './instance-dialog/instance-dialog.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input() records: any[] = [];
  @Input() tableFields: any[] = [];
  @Input() instanceFields: any[] = [];
  public selectedRow: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onGridReady(params): void {
    params.api.sizeColumnsToFit();
  }

  onRowSelected(event): void {
    this.selectedRow = event.data;
  }

  onClickCreateButton(): void {
    console.log(this.instanceFields);

    const dialogRef = this.dialog.open(InstanceDialogComponent, {
      width: '250px',
      data: {
        caption: 'Create',
        fields: this.instanceFields
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
