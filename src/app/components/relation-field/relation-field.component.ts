import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-relation-field',
  templateUrl: './relation-field.component.html',
  styleUrls: ['./relation-field.component.css']
})
export class RelationFieldComponent implements OnInit {
  @Input() field: any;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
