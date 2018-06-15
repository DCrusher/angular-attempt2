import {
  DynamicDatePickerModel,
  DynamicInputModel,
  DynamicSelectModel,
  DynamicTextAreaModel,
  DynamicFormGroupModel
} from '@ng-dynamic-forms/core';
import { of } from 'rxjs/observable/of';

export const SAMPLE_FORM_MODEL = [
  new DynamicFormGroupModel({
    id: 'first-row',
    group: [
      new DynamicSelectModel<string>({

        id: 'demoSelect',
        label: 'Fee Type',
        options: [
            {
                label: 'Option 1',
                value: 'option-1',
            }
        ]
      }),
      new DynamicInputModel({
          id: 'demoInput',
          label: 'Amount',
          maxLength: 51,
          placeholder: 'Amount',
      }),
    ]
  }),
  new DynamicFormGroupModel({
    id: 'second-row',
    group: [
      new DynamicDatePickerModel({
        id: 'demoDatePicker',
        label: 'Date',
        toggleLabel: 'Open',
        placeholder: 'Date',
        value: new Date(),
        additional: {
            containerClass: 'input-group-sm'
        }
      }),
      new DynamicSelectModel<string>({
          id: 'demoSelect2',
          label: 'Status',
          options: of([
              {
                  label: 'Bill',
                  value: 'bill',
              }
          ])
      }),
      new DynamicInputModel({
          id: 'demoInput2',
          label: 'Paid',
          maxLength: 51,
          placeholder: 'Paid',
      }),
    ]
  }),
  new DynamicFormGroupModel({
    id: 'third-row',
    group: [
      new DynamicInputModel({
        id: 'demoInput3',
        label: 'Pay',
        maxLength: 51,
        placeholder: 'Pay',
      }),
      new DynamicSelectModel<string>({
          hint: 'Distribute the remaining amount to the loan lenders by % owned',
          id: 'demoSelect3',
          label: 'To',
          options: of([
              {
                  label: 'Select lender',
                  value: 'select-lender',
              }
          ])
      }),
      new DynamicInputModel({
          id: 'demoInput4',
          maxLength: 51,
          label: 'Search',
          placeholder: 'Search',
      }),
    ]
  }),
  new DynamicFormGroupModel({
    id: 'fourth-row',
    group: [
      new DynamicInputModel({
        id: 'demoInput5',
        label: 'Charge Interest',
        maxLength: 51,
        placeholder: 'Charge Interest',
      }),
      new DynamicDatePickerModel({
          id: 'demoDatePicker2',
          label: 'From Date',
          toggleLabel: 'Open',
          placeholder: 'From Date',
      }),
      new DynamicDatePickerModel({
          id: 'demoDatePicker3',
          label: 'to',
          toggleLabel: 'Open',
          placeholder: 'to',
      }),
    ]
  }),
  new DynamicTextAreaModel({
      id: 'demoTextArea',
      label: 'Memo',
      rows: 5,
      placeholder: 'example Textarea',
  }),
];
