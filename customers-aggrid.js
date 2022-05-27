var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import {Grid, GridOptions} from '@ag-grid-community/core';
// import {Grid} from 'ag-grid-community';
// import '../node_modules/ag-grid-community/dist/ag-grid-community';
// import 'ag-grid-webcomponent/src/agGrid';
// import 'ag-grid-community/dist/ag-grid-community';
let CustomersAggrid = class CustomersAggrid extends LitElement {
    constructor() {
        super();
        this.rowData = [
            { make: 'Toyota1', model: 'Celica', price: 35000 },
            { make: 'Ford2', model: 'Mondeo', price: 32000 },
            { make: 'Porsche3', model: 'Boxter', price: 72000 },
        ];
        this.gridOptions = {
            columnDefs: [
                { headerName: 'Make', field: 'make' },
                { headerName: 'Model', field: 'model' },
                { headerName: 'Price', field: 'price' },
            ],
        };
    }
    // specify the columns
    // specify the data
    render() {
        return html `
      <ag-grid
        id="detailsGrid"
        class="ag-theme-dark"
        .gridOptions="${this.gridOptions}"
        .rowData="${this.rowData}"
      ></ag-grid>
    `;
    }
};
__decorate([
    property()
], CustomersAggrid.prototype, "rowData", void 0);
__decorate([
    property()
], CustomersAggrid.prototype, "gridOptions", void 0);
CustomersAggrid = __decorate([
    customElement('customers-aggrid')
], CustomersAggrid);
export { CustomersAggrid };
//# sourceMappingURL=customers-aggrid.js.map