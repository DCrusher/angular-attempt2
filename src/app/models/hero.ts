
import BaseDataModel from './base-data-model';

const API_ENDPOINT = 'api/heroes';
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
    filter: true
  }
];

export default class Hero extends BaseDataModel {

  constructor() {
    super('Hero', FIELDS, API_ENDPOINT);
  }
}
