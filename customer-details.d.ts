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
export declare class CustomerDetails extends LitElement {
    customer: Customer;
    fomdata: {}[];
    regex: RegExp;
    emailRegex: RegExp;
    static styles: import("lit").CSSResult;
    title: string;
    private responsiveSteps;
    errors: any;
    protected render(): import("lit-html").TemplateResult<1>;
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
//# sourceMappingURL=customer-details.d.ts.map