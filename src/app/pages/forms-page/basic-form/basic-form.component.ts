import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_MODEL } from './basic.model';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
