import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  displayedColumns = ['Payment', 'Payment Date', 'Principal Paid', 'Interest Paid'];
  dataSource = [
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
