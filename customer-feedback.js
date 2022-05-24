var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@vaadin/text-field';
import '@vaadin/email-field';
import '@vaadin/number-field';
import '@vaadin/radio-group';
import '@vaadin/vertical-layout';
import '@vaadin/date-picker';
import '@vaadin/button';
import '@vaadin/radio-group/src/vaadin-radio-button';
import '@vaadin/form-layout';
// import {FormLayoutResponsiveStep} from '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/form-layout/vaadin-form-item';
import '@vaadin/vertical-layout';
import '@vaadin/list-box';
import '@vaadin/select';
import '@vaadin/text-area';
import { Feedback } from './feedback';
let CustomerFeedback = 
// @customElement('customer-feedback')
class CustomerFeedback extends LitElement {
    constructor() {
        super(...arguments);
        this.feedback = new Feedback();
        this.fbdata = [{}];
        this.head = 'Customer Feedback';
        this.title = ' Tell us how do you think..!';
        this.items = [
            {
                label: 'select',
                value: 'select',
            },
            {
                label: 'May be',
                value: 'May be',
            },
            {
                label: 'May not be',
                value: 'May not be',
            },
        ];
    }
    render() {
        return html `
      <h1>${this.head}</h1>
      <div class="container">
        <vaadin-vertical-layout>
          <h2>${this.title}</h2>

          <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-text-field
            name="ProductRating"
            value=${this.feedback.ProductRating}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          >
          </vaadin-text-field>

          <label>
            <h4>How do you rate the speed of delivery ?</h4>
          </label>
          <vaadin-text-field
            name="DeliveryRating"
            value=${this.feedback.DeliveryRating}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          >
          </vaadin-text-field>

          <label>
            <h4>How do you find the sizing of the product ?</h4>
          </label>
          <vaadin-radio-group @change=${this.handleChange} theme="vertical">
            <vaadin-radio-button
              value="Too small"
              label="Too small"
              name="Size"
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="Just Right"
              label="Just Right"
              name="Size"
            ></vaadin-radio-button>

            <vaadin-radio-button
              value="Too Large"
              label="Too Large"
              name="Size"
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you like to contact us for different sizing?</h4>
          </label>
          <vaadin-radio-group @click=${this.handleChange}>
            <vaadin-radio-button
              value="Yes"
              label="Yes"
              name="ContactUs"
              @click=${this.handleChange}
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="No"
              label="No"
              name="ContactUs"
              @click=${this.handleChange}
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you recommond our product to others ?</h4>
          </label>
          <vaadin-select
            .items="${this.items}"
            .value="${this.items[0].value}"
            name="Recommond"
            @change=${this.handleChange}
          ></vaadin-select>

          <label>
            <h4>Would you give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            name="OtherFeedabck"
            @change=${this.handleChange}
          ></vaadin-text-area>

          <vaadin-horizontal-layout theme="spacing">
            <vaadin-button @click="${this.fbformsubmit}" theme="primary"
              >Submit</vaadin-button
            >
            <vaadin-button theme="secondary">Cancel</vaadin-button>
          </vaadin-horizontal-layout>
        </vaadin-vertical-layout>

        <vaadin-button theme="primary" @click="${this.getfbData}">
          get data</vaadin-button
        >
      </div>

      >
    `;
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.feedback = { ...this.feedback, [name]: value };
    }
    fbformsubmit() {
        console.log(JSON.stringify(this.feedback, null, 2));
        this.fbdata.push({ ...this.feedback });
        console.log(JSON.stringify(this.fbdata, null, 2));
        if (this.fbdata != null) {
            localStorage.setItem('this.fbdata', JSON.stringify(this.fbdata, null, 2));
        }
        // localStorage.setItem(
        //   'this.feedback',
        //   JSON.stringify(this.feedback, null, 2)
        // );
    }
    getfbData() {
        let myfbdata = JSON.parse(localStorage.getItem('this.feedback') || '{}');
        console.log(myfbdata.ProductRating, typeof myfbdata);
        console.log(myfbdata, typeof myfbdata);
    }
};
CustomerFeedback.styles = css `
    h1 {
      text-align: center;
    }
    h2 {
      color: blue;
    }
    .container {
      text-align: center;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  `;
__decorate([
    property()
], CustomerFeedback.prototype, "title", void 0);
__decorate([
    state()
], CustomerFeedback.prototype, "items", void 0);
CustomerFeedback = __decorate([
    customElement('customer-feedback')
    // @customElement('customer-feedback')
], CustomerFeedback);
export { CustomerFeedback };
//# sourceMappingURL=customer-feedback.js.map