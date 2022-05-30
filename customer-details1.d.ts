import { LitElement } from 'lit';
import './customer';
import '@vaadin/text-field';
import '@vaadin/email-field';
import '@vaadin/number-field';
import '@vaadin/vertical-layout';
import '@vaadin/date-picker';
import '@vaadin/radio-group';
import '@vaadin/button';
import '@vaadin/radio-group/src/vaadin-radio-button';
import '@vaadin/form-layout';
import '@vaadin/dialog';
import '@vaadin/horizontal-layout';
import '@vaadin/checkbox';
import { Customer } from './customer';
import '@vaadin/text-area';
import '@vaadin/button';
import '@vaadin/dialog';
import '@vaadin/horizontal-layout';
import '@vaadin/text-field';
import '@vaadin/vertical-layout';
import '@vaadin/select';
import '@vaadin/text-area';
import { Feedback } from './feedback';
export declare class CustomerDetails extends LitElement {
    customer: Customer;
    fomdata: any;
    regex: RegExp;
    emailRegex: RegExp;
    static styles: import("lit").CSSResult;
    title: string;
    private responsiveSteps;
    fdata: any;
    fulldata: {}[];
    private dialogOpened;
    feedback: Feedback;
    fbdata: any;
    regex1: RegExp;
    head: string;
    title1: string;
    private items;
    protected render(): import("lit-html").TemplateResult<1>;
    handlefbChange(e: {
        target: {
            name: any;
            value: any;
        };
    }): void;
    handleSize(e: any, _key: any): void;
    handleContact(e: any, _key: any): void;
    fbformsubmit(): void;
    handleChange(e: {
        target: {
            value: any;
            name?: any;
        };
    }): void;
    handleGender(e: any, _key: any): void;
    validate: () => void;
    formsubmit(): void;
    getData(): void;
}
//# sourceMappingURL=customer-details1.d.ts.map