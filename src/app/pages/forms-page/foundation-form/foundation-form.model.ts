import {
  DynamicDatePickerModel,
  DynamicInputModel,
  DynamicSelectModel,
  DynamicTextAreaModel,
} from '@ng-dynamic-forms/core';
import { of } from 'rxjs/observable/of';

export const SAMPLE_FORM_MODEL = [
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
  new DynamicInputModel({

      id: 'demoDatePicker',
      label: 'Date',
      inputType: 'date',
      placeholder: 'Date',
      value: new Date()
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
  new DynamicInputModel({
      id: 'demoDatePicker2',
      label: 'From Date',
      inputType: 'date',
      placeholder: 'From Date'
  }),
  new DynamicInputModel({
      id: 'demoDatePicker3',
      label: 'to',
      inputType: 'date',
      placeholder: 'to'
  }),
  new DynamicTextAreaModel({
      id: 'demoTextArea',
      label: 'Memo',
      rows: 5,
      placeholder: 'example Textarea',
  }),
];
