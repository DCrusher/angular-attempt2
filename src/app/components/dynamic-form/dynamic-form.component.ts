import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: any[];

  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const formControls = {};

    this.fields.forEach(field => {
      formControls[field.name] = new FormControl(field.value);
    });

    this.dynamicForm = this.fb.group(formControls);
  }

  onClickTest() {
    console.log(this.dynamicForm.value);
  }
}
