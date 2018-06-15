import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './primeng.layout';
import { SAMPLE_FORM_MODEL } from './primeng.model';

@Component({
  selector: 'app-primeng-form',
  templateUrl: './primeng-form.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [
    './primeng-form.component.css',
    '../../../../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../../../../node_modules/primeng/resources/primeng.min.css',
    '../../../../../node_modules/quill/dist/quill.core.css',
    '../../../../../node_modules/quill/dist/quill.snow.css',
],
})
export class PrimengFormComponent implements OnInit {
  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
