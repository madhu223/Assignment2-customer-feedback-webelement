import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
// import {Grid, GridOptions} from '@ag-grid-community/core';
// import {Grid} from 'ag-grid-community';
// import '../node_modules/ag-grid-community/dist/ag-grid-community';
import '/ag-grid-webcomponent/src/agGrid';
import 'ag-grid-community/dist/ag-grid-community';
import '../node_modules/ag-grid-community//main';
import '../node_modules/ag-grid-webcomponent/src';

@customElement('customers-aggrid')
export class CustomersAggrid extends LitElement {
  constructor() {
    super();
    this.rowData = [
      {make: 'Toyota1', model: 'Celica', price: 35000},
      {make: 'Ford2', model: 'Mondeo', price: 32000},
      {make: 'Porsche3', model: 'Boxter', price: 72000},
    ];
    this.gridOptions = {
      columnDefs: [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},
      ],
    };
  }

  @property()
  rowData: any;
  @property()
  gridOptions: any;

  // specify the columns

  // specify the data

  protected override render() {
    return html`
      <ag-grid
        id="detailsGrid"
        class="ag-theme-dark"
        .gridOptions="${this.gridOptions}"
        .rowData="${this.rowData}"
      ></ag-grid>
    `;
  }
}
