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
import { Feedback } from './feedback';
import { Customer } from './customer';
export declare class FeedbackCustomer extends LitElement {
    feedback: Feedback;
    customer: Customer;
    fbdata: {}[];
    regex: RegExp;
    static styles: import("lit").CSSResult;
    head: string;
    title: string;
    private items;
    protected render(): import("lit-html").TemplateResult<1>;
    validatefb: () => void;
    handleChange(e: {
        target: {
            name: any;
            value: any;
        };
    }): void;
    handleSize(e: any, _key: any): void;
    handleContact(e: any, _key: any): void;
    handlefbChange(e: {
        target: {
            value: any;
            name?: any;
        };
    }): void;
    fbformsubmit(): void;
    getfbData(): void;
}
//# sourceMappingURL=customer-feedback1.d.ts.map