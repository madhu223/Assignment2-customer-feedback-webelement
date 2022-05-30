import { LitElement } from 'lit';
import '@vaadin/number-field';
import '@vaadin/button';
export declare class ViewCustomer extends LitElement {
    data: any;
    fdata: any;
    Id: number;
    constructor();
    title: string;
    handleview(e: {
        target: {
            value: any;
        };
    }): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=view-customer.d.ts.map