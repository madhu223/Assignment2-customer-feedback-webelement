import { Grid } from '@ag-grid-community/core';
// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// or, if using Enterprise features
// import {Grid, GridOptions, ModuleRegistry} from "@ag-grid-enterprise/core";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';;
// ModuleRegistry.register(ClientSideRowModelModule);
// import '../dev/styles.scss';
class SimpleGrid {
    constructor() {
        this.gridOptions = {};
        this.gridOptions = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData(),
        };
        let eGridDiv = document.querySelector('#myGrid');
        new Grid(eGridDiv, this.gridOptions);
    }
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
}
new SimpleGrid();
//# sourceMappingURL=simple-grid.js.map