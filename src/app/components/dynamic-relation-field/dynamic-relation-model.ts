// import { DynamicOptionControlModel, DynamicOptionControlModelConfig } from '@ng-forms/core';
// import { DynamicFormControlLayout } from '@ng-forms/misc/dynamic-form-control-layout.model';
// import { serializable } from '@ng-forms/decorator/serializable.decorator';

// export const DYNAMIC_FORM_CONTROL_TYPE_SELECT = 'SELECT';

// export interface DynamicRelationModelConfig<T> extends DynamicOptionControlModelConfig<T> {

//     filterable?: boolean;
//     multiple?: boolean;
//     placeholder?: string;
//     prefix?: string;
//     suffix?: string;
// }

// export class DynamicRelationModel<T> extends DynamicOptionControlModel<T> {

//     @serializable() filterable: boolean;
//     @serializable() multiple: boolean;
//     @serializable() placeholder: string;
//     @serializable() prefix: string | null;
//     @serializable() suffix: string | null;

//     @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_SELECT;

//     constructor(config: DynamicRelationModelConfig<T>, layout?: DynamicFormControlLayout) {

//         super(config, layout);

//         this.filterable = typeof config.filterable === 'boolean' ? config.filterable : false;
//         this.multiple = typeof config.multiple === 'boolean' ? config.multiple : false;
//         this.placeholder = config.placeholder || '';
//         this.prefix = config.prefix || null;
//         this.suffix = config.suffix || null;
//     }

//     select(...indices: number[]): void {

//         const value = this.multiple ? indices.map(index => this.get(index).value) : this.get(indices[0]).value;

//         this.valueUpdates.next(value);
//     }
// }
