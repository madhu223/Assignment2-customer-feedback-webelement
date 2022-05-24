import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Grid, GridOptions} from '@ag-grid-community/core';

@customElement('customers-aggrid')
export class CustomersAggrid extends LitElement {
  // specify the columns
  private createColumnDefs() {
    return [
      {headerName: 'Make', field: 'make'},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price'},
    ];
  }

  // specify the data
  private createRowData() {
    return [
      {make: 'Toyota1', model: 'Celica', price: 35000},
      {make: 'Ford2', model: 'Mondeo', price: 32000},
      {make: 'Porsche3', model: 'Boxter', price: 72000},
    ];
  }

  protected override render() {
    return html``;
  }
}
