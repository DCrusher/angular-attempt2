import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './coreui-form.layout';
import { SAMPLE_FORM_MODEL } from './coreui-form.model';

@Component({
  selector: 'app-coreui-form',
  templateUrl: './coreui-form.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [
    './coreui-form.component.scss'
  ]
})
export class CoreuiFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
