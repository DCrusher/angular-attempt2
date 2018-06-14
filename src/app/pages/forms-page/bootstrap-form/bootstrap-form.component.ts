import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './bootstrap-form.layout';
import { SAMPLE_FORM_MODEL } from './bootstrap-form.model';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [
    './bootstrap-form.component.css',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class BootstrapFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
