import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicFormService,
} from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './foundation-form.layout';
import { SAMPLE_FORM_MODEL } from './foundation-form.model';


@Component({
  selector: 'app-foundation-form',
  templateUrl: './foundation-form.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [
    './foundation-form.component.css',
    '../../../../../node_modules/foundation-sites/dist/css/foundation.css'
  ]
})
export class FoundationFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
