
import BaseModel from './base-model';

const API_ENDPOINT = 'api/powers';
const MODEL_NAME = 'Power';
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
    name: 'hazard',
    caption: 'Hazard',
    type: 'number',
    sort: true,
    filter: true
  }
];

export default class Power extends BaseModel {

  constructor() {
    super(MODEL_NAME, FIELDS, API_ENDPOINT);
  }
}
