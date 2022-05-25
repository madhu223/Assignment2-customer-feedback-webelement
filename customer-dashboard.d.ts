import { LitElement } from 'lit';
import '@vaadin/grid';
import '@vaadin/split-layout';
import './customer-details';
import './customer-feedback1';
import './feedback-customer';
import '@vaadin/grid/vaadin-grid-selection-column.js';
import '@vaadin/radio-group';
import './customers-aggrid';
export declare class CustomerDashboard extends LitElement {
    data: any;
    data1: any;
    fdata: any;
    fdata1: any;
    fulldata: {}[];
    title: string;
    protected render(): import("lit-html").TemplateResult<1>;
    fetchData(): void;
    getRadio(e: {
        target: {
            value: any;
            name?: any;
        };
    }): void;
}
//# sourceMappingURL=customer-dashboard.d.ts.map