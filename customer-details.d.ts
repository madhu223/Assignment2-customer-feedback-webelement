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
import '@vaadin/horizontal-layout';
import { Customer } from './customer';
export declare class CustomerFeedback extends LitElement {
    customer: Customer;
    private counter;
    static styles: import("lit").CSSResult;
    title: string;
    private responsiveSteps;
    protected render(): import("lit-html").TemplateResult<1>;
    handleChange(e: {
        target: {
            value: any;
            name?: any;
        };
    }): void;
    formsubmit(): void;
    formcancel(): void;
}
//# sourceMappingURL=customer-details.d.ts.map