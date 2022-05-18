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
export declare class CustomerFeedback extends LitElement {
    static styles: import("lit").CSSResult;
    head: string;
    title: string;
    employee: any;
    private items;
    private charLimit;
    private text;
    protected render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=customer-feedback.d.ts.map