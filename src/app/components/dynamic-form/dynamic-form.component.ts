import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormControl, DynamicFormService, DYNAMIC_FORM_CONTROL_MAP_FN } from '@ng-dynamic-forms/core';
// import { DynamicRelationFieldComponent } from '../dynamic-relation-field/dynamic-relation-field.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() model: any;
  @Input() instance: any;

  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
  }

  getValues() {
    return this.formGroup.value;
  }

  ngOnInit() {
    this.formModel = this.model.dynamicFormModel(this.instance);
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onClickTest() {
    console.log(this.formGroup.value);
  }
}
