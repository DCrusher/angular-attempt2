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

    id: 'row0',
    group: [
      new DynamicSelectModel<string>({

        id: 'demoSelect',
        label: 'Fee Type',
        options: of([
            {
                label: 'Option 1',
                value: 'option-1',
            }
        ])
      }),
      new DynamicInputModel({
        id: 'demoInput',
        label: 'Amount',
        maxLength: 51,
        placeholder: 'Amount',
      }),
    ]
  }),
  new DynamicDatePickerModel({
    id: 'demoDatePicker',
    label: 'Date',
    inline: false,
    toggleLabel: 'Open',
    placeholder: 'Date',
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
      additional: {
          containerClass: 'theme-red'
      }
  }),
  new DynamicDatePickerModel({
      id: 'demoDatePicker3',
      label: 'to',
      toggleLabel: 'Open',
      placeholder: 'to',
      additional: {
          containerClass: 'theme-red'
      }
  }),
  new DynamicTextAreaModel({
      id: 'demoTextArea',
      label: 'Memo',
      rows: 5,
      placeholder: 'example Textarea',
  }),
];
