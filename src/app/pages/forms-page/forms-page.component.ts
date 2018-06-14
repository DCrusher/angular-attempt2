import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: [
    './forms-page.component.css'
  ]
})
export class FormsPageComponent implements OnInit {

  paymentsFields = [
    { headerName: 'Payment', field: 'Payment', width: 170},
    { headerName: 'Payment Date', field: 'Payment Date'},
    { headerName: 'Principal Paid', field: 'Principal Paid'},
    { headerName: 'Interest Paid', field: 'Interest Paid'}
  ];
  paymentsRecords = [
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
    { 'Payment': '', 'Payment Date': '', 'Principal Paid': '' , 'Interest Paid': '' },
  ];

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
  }

}
