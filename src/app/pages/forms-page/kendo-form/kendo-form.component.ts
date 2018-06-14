import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './kendo-form.layout';
import { SAMPLE_FORM_MODEL } from './kendo-form.model';


@Component({
  selector: 'app-kendo-form',
  templateUrl: './kendo-form.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [
    './kendo-form.component.css',
    '../../../../../node_modules/@progress/kendo-theme-default/dist/all.css'
  ]
})
export class KendoFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
