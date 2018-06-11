import BaseModel from './base-model';
import Power from './power';
import { isObject } from 'lodash';

const API_ENDPOINT = 'api/heroes';
const MODEL_NAME = 'Hero';
const FIELDS = [
  {
    name: 'id',
    type: 'identifier',
    readonly: true
  }, {
    name: 'name',
    caption: 'Name',
    type: 'text',
    sort: true,
    filter: true
  }, {
    name: 'age',
    caption: 'Age',
    type: 'number',
    sort: true,
    filter: true
  }, {
    name: 'power',
    caption: 'Power',
    type: 'relation',
    sort: true,
    filter: true,
    cellRenderer: (data) => {
      const { value } = data;

      if (isObject(value)) {
        return `${value.name} (haz: <span style="color: red;">${value.hazard})</span>`;
      } else {
        return value;
      }
    },
    relation: {
      dataModel: new Power(),
      selectedTemplate: "{name} (haz: {hazard})"
    }
  }
];

export default class Hero extends BaseModel {

  constructor() {
    super(MODEL_NAME, FIELDS, API_ENDPOINT);
  }
}
