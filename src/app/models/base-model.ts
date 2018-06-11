import {
  DynamicFormControlModel,
  DynamicSelectModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel
} from '@ng-dynamic-forms/core';

// import { DynamicRelationModel } from '../components/dynamic-relation-field/dynamic-relation-model';

export default class BaseDataModel {
  private apiEndpoint: string;
  private name: string;
  private fields: any[];

  constructor(name, fields, endpoint) {
    this.name = name;
    this.fields = fields;
    this.apiEndpoint = endpoint;
  }

  endpoint() {
    return this.apiEndpoint;
  }

  fieldsToView() {
    return this.fields
      .filter((field) => (
        !field.private
      ))
      .map((field) => ({
        headerName: field.caption,
        cellRenderer: field.cellRenderer,
        field: field.name,
        sort: field.sortable,
        filter: field.fielter
      })
    );
  }

  fieldsToManipulate() {
    return this.fields
      .filter((field) => (
        !field.private && !field.readonly
      ))
      .map((field) => ({
        caption: field.caption,
        name: field.name,
        type: field.type,
        additional: field.relation,
        options: field.options
      })
    );
  }

  dynamicFormModel(instance: any): DynamicFormControlModel[] {
    const modelControls = [];
    const fieldsForForm = this.fieldsToManipulate();
    let fieldValue = null;

    fieldsForForm.forEach(field => {
      if (instance) {
        fieldValue = instance[field.name];
      }

      switch (field.type) {
        case 'relation':
          modelControls.push(
            new DynamicSelectModel({

              id: field.name,
              placeholder: field.caption,
              value: fieldValue,
              multiple: true,
              options: field.options,
              additional: field.additional
            })
          );
          break;
        case 'checkbox':
          modelControls.push(
            new DynamicCheckboxModel({
              id: field.name,
              value: fieldValue,
              label: field.caption
            })
          );
          break;
        default:
          modelControls.push(
            new DynamicInputModel({
              id: field.name,
              label: field.caption,
              value: fieldValue,
              placeholder: field.caption,
              inputType: field.type
            })
          );
          break;
      }
    });

    return modelControls;
  }
}
