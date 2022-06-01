import { LitElement } from 'lit';
import '@vaadin/text-field';
import '@vaadin/email-field';
import '@vaadin/number-field';
import '@vaadin/radio-group';
import '@vaadin/vertical-layout';
import '@vaadin/date-picker';
import '@vaadin/button';
import '@vaadin/radio-group/src/vaadin-radio-button';
import '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/form-layout/vaadin-form-item';
import '@vaadin/vertical-layout';
import '@vaadin/list-box';
import '@vaadin/select';
import '@vaadin/text-area';
export declare class FeedbackCustomer extends LitElement {
    data: any;
    Id: number;
    constructor();
    regex: RegExp;
    static styles: import("lit").CSSResult;
    head: string;
    title: string;
    private items;
    protected render(): import("lit-html").TemplateResult<1>;
    validatefb: () => string;
    handleChange(e: {
        target: {
            name: any;
            value: any;
        };
    }): void;
    handleSize(e: any, _key: any): void;
    handleContact(e: any, _key: any): void;
    fbformsubmit(): void;
}
//# sourceMappingURL=feedback-customer1.d.ts.map