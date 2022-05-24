var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let CustomersAggrid = class CustomersAggrid extends LitElement {
    // specify the columns
    createColumnDefs() {
        return [
            { headerName: 'Make', field: 'make' },
            { headerName: 'Model', field: 'model' },
            { headerName: 'Price', field: 'price' },
        ];
    }
    // specify the data
    createRowData() {
        return [
            { make: 'Toyota1', model: 'Celica', price: 35000 },
            { make: 'Ford2', model: 'Mondeo', price: 32000 },
            { make: 'Porsche3', model: 'Boxter', price: 72000 },
        ];
    }
    render() {
        return html ``;
    }
};
CustomersAggrid = __decorate([
    customElement('customers-aggrid')
], CustomersAggrid);
export { CustomersAggrid };
//# sourceMappingURL=customers-aggrid.js.map