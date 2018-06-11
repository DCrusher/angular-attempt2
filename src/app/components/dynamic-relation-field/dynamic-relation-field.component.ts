import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    DynamicFormControlComponent,
    DynamicFormControlCustomEvent,
    DynamicSelectModel,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
} from '@ng-dynamic-forms/core';

import { RelationFieldComponent } from '../relation-field/relation-field.component';

@Component({
    selector: 'app-dynamic-relation-field',
    templateUrl: './dynamic-relation-field.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicRelationFieldComponent extends DynamicFormControlComponent implements OnInit {
    @Input() name: string;
    @Input() bindId = true;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicSelectModel<String>; /* corresponding DynamicFormControlModel */
    @Input() value: any;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(RelationFieldComponent) relationFieldComponent: RelationFieldComponent;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {
      super(layoutService, validationService);
    }

    ngOnInit() {
      console.log(this.model);
    }
}
