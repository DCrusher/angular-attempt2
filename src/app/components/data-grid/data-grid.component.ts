import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { InstanceDialogComponent } from './instance-dialog/instance-dialog.component';
import { DataFetchingService } from '../../services/data-fetching.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input() model: any;
  @Output() rowSelected = new EventEmitter<any>();

  private records: any[];
  private fields: any[];
  public selectedRow: any;

  constructor(
    private dialog: MatDialog,
    private dataService: DataFetchingService
  ) { }

  ngOnInit() {
    this.getData();
    this.fields = this.model.fieldsToView();
  }

  getData(): void {
    this.dataService.getData(this.model.endpoint())
    .subscribe(records => {
      this.records = records;
    });
  }

  onGridReady(params): void {
    params.api.sizeColumnsToFit();
  }

  onRowSelected(event): void {
    if (event.node.selected) {
      this.selectedRow = event.data;
      this.rowSelected.emit(event);
    }
  }

  onRowDoubleClicked(event): void {
    const instance = event.data;

    const dialogRef = this.dialog.open(InstanceDialogComponent, {
      width: '250px',
      data: {
        caption: 'Edit',
        instance: instance,
        model: this.model
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        result.id = instance.id;
        this.dataService.update(this.model.endpoint(), result)
          .subscribe(() => {
            this.getData();
          });
      }
    });
  }

  onClickCreateButton(): void {
    const dialogRef = this.dialog.open(InstanceDialogComponent, {
      width: '250px',
      data: {
        caption: 'Create',
        model: this.model
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.dataService.add(this.model.endpoint(), result)
          .subscribe(() => {
            this.getData();
          });
      }
    });
  }
}
