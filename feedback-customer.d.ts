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
export declare class FeedbackCustomer extends LitElement {
    feedback: Feedback;
    fbdata: any;
    fomdata: any;
    custs: Array<object>;
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
    handleCancel(): void;
    fbformsubmit(): void;
}
//# sourceMappingURL=feedback-customer.d.ts.map