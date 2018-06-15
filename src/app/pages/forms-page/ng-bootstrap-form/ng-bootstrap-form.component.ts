import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

import { SAMPLE_FORM_LAYOUT } from './ng-bootstrap.layout';
import { SAMPLE_FORM_MODEL } from './ng-bootstrap.model';

@Component({
  selector: 'app-ng-bootstrap-form',
  templateUrl: './ng-bootstrap-form.component.html',
  styleUrls: ['./ng-bootstrap-form.component.css']
})
export class NgBootstrapFormComponent implements OnInit {

  formModel: DynamicFormControlModel[] = SAMPLE_FORM_MODEL;
  formLayout: DynamicFormLayout = SAMPLE_FORM_LAYOUT;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
