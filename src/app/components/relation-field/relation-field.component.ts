import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { isObject } from 'lodash';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { DataFetchingService } from '../../services/data-fetching.service';

import format from 'string-template';

// import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-relation-field',
  templateUrl: './relation-field.component.html',
  styleUrls: ['./relation-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RelationFieldComponent),
      multi: true
    }
  ]
})
export class RelationFieldComponent implements ControlValueAccessor, OnInit {
  @Input() formGroup: FormGroup;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() relation: any;
  @Input() value: any;

  @ViewChild('dictionary')
  private dictionary: MatSidenav;

  inputText: string;
  selected: any;

  private searchTerms = new Subject<string>();
  public items$: Observable<any[]>;
  writeValue(value: any) {
    this.selected = value;
  }

  constructor(private dataService: DataFetchingService) {}

  onTableRowSelected(item) {
    this.onSelectItem(item);
    this.dictionary.close();
  }

  onSelectItem(item) {
    this.selected = item;
    this.propagateChange(item);
    this.inputText = this.getSelectedItem(item);
  }

  getSelectedItem(item) {
    const { selectedTemplate } = this.relation;

    if (!item) {
      return;
    }
    if (isObject(item)) {
      if (selectedTemplate ) {
        return format(selectedTemplate, item);
      } else {
        return item.name || item.caption || item.title || item.id;
      }
    } else {
      return item;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  search(searchString: string): void {
    this.searchTerms.next(searchString);
  }

  ngOnInit(): void {
    this.inputText = this.getSelectedItem(this.value);
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dataService.search(this.relation.dataModel, term)),
    );
  }

}
