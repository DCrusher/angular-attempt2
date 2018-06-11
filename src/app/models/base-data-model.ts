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
      type: field.type
    })
  );
  }
}
