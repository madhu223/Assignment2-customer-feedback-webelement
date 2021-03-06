var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import {html, LitElement} from 'lit';
// import {customElement} from 'lit/decorators.js';
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
// import {Feedback} from './feedback';
// import {Customer} from './customer';
import { CustomerData } from './customerdata';
let FeedbackCustomer1 = class FeedbackCustomer1 extends LitElement {
    constructor() {
        super(...arguments);
        // feedback: Feedback = new Feedback();
        // customer: Customer = new Customer();
        // customer: Customer = new Customer();
        this.customer = new CustomerData();
        this.fbdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
        this.fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
        this.regex = /^[0-9]$/;
        this.head = 'Customer Feedback';
        this.title = ' Tell us how do you think..!';
        this.items = [
            // {
            //   label: 'select',
            //   value: 'select',
            // },
            {
                label: 'May be',
                value: 'May be',
            },
            {
                label: 'May not be',
                value: 'May not be',
            },
        ];
        // validation
        this.validatefb = () => {
            // Product Rating
            if (!this.customer.feedBack.productRating) {
                // console.log(this.feedback.productRating);
                alert('productRating is filed is required');
            }
            // if (this.feedback.productRating < 10) {
            //   console.log(this.feedback.productRating < 10);
            //   alert('Product rating sholud betweeen 1-10');
            // }
            if (!this.regex.test(this.customer.feedBack.productRating)) {
                alert('Product rating sholud betweeen 0-9!');
            }
            // Delivery rating
            if (!this.customer.feedBack.deliveryRating) {
                // console.log(this.feedback.deliveryRating);
                alert('DeliveryRating is filed is required');
            }
            if (!this.regex.test(this.customer.feedBack.deliveryRating)) {
                alert('DeliveryRating sholud betweeen 0-9!');
            }
            //Size
            if (!this.customer.feedBack.size) {
                // console.log(this.feedback.productRating);
                alert('Size is filed is required');
            }
            // Contact us
            if (!this.customer.feedBack.contactUs) {
                // console.log(this.feedback.productRating);
                alert('contact us is filed is required');
            }
            // Recommond
            if (!this.customer.feedBack.recommond) {
                // console.log(this.feedback.productRating);
                alert('Recommond is filed is required');
            }
        };
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
          <vaadin-number-field
            name="productRating"
            value=${this.customer.feedBack.productRating}
            @change=${this.handlefbChange}
            required
            error-message="This field is required"
          >
          </vaadin-number-field>

          <label>
            <h4>How do you rate the speed of delivery ?</h4>
          </label>
          <vaadin-number-field
            name="deliveryRating"
            value=${this.customer.feedBack.deliveryRating}
            @change=${this.handlefbChange}
            required
            error-message="This field is required"
          >
          </vaadin-number-field>

          <label>
            <h4>How do you find the sizing of the product ?</h4>
          </label>
          <vaadin-radio-group
            theme="vertical"
            value=${this.customer.feedBack.size}
            @value-changed=${(e) => {
            this.handleSize(e, 'size');
        }}
          >
            <vaadin-radio-button
              value="Too small"
              label="Too small"
              name="size"
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="Just Right"
              label="Just Right"
              name="size"
            ></vaadin-radio-button>

            <vaadin-radio-button
              value="Too Large"
              label="Too Large"
              name="size"
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you like to contact us for different sizing?</h4>
          </label>
          <vaadin-radio-group
            theme="vertical"
            value=${this.customer.feedBack.contactUs}
            @value-changed=${(e) => {
            this.handleContact(e, 'contactUs');
        }}
          >
            <vaadin-radio-button
              theme="vertical"
              value="Yes"
              label="Yes"
              name="contactUs"
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="No"
              label="No"
              name="contactUs"
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you recommond our product to others ?</h4>
          </label>
          <vaadin-select
            placeholder="select"
            .items="${this.items}"
            name="recommond"
            value=${this.customer.feedBack.recommond}
            @value-changed=${this.handlefbChange}
          ></vaadin-select>

          <label>
            <h4>Would you like to give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            name="otherFeedabck"
            value=${this.customer.feedBack.otherFeedabck}
            @change=${this.handlefbChange}
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
    // handleChange(e: {target: {name: any; value: any}}) {
    //   const {name, value} = e.target;
    //   this.feedback = {...this.feedback, [name]: value};
    // }
    handleSize(e, _key) {
        // this.feedback.size = e.target.value;
        this.customer.feedBack.size = e.target.value;
        // console.log((this.feedback.size = e.target.value));
    }
    handleContact(e, _key) {
        // this.feedback.contactUs = e.target.value;
        this.customer.feedBack.contactUs = e.target.value;
        // console.log((this.feedback.contactUs = e.target.value));
    }
    handlefbChange(e) {
        const { name, value } = e.target;
        this.customer.feedBack = { ...this.customer.feedBack, [name]: value };
        // console.log(this.customer.feedBack);
    }
    fbformsubmit() {
        this.validatefb();
        console.log('This is data :', JSON.stringify(this.customer, null, 2));
        console.log(JSON.stringify(this.customer.feedBack, null, 2));
        this.fbdata.push({ ...this.customer.feedBack });
        this.fomdata.push({ ...this.customer.feedBack });
        console.log(JSON.stringify(this.fbdata, null, 2));
        if (this.fbdata) {
            localStorage.setItem('this.fbdata', JSON.stringify(this.fbdata, null, 2));
            localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
        }
        // localStorage.setItem(
        //   'this.feedback',
        //   JSON.stringify(this.feedback, null, 2)
        // );
        this.customer = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            dob: '',
            gender: '',
            city: '',
            state: '',
            country: '',
            postalCode: '',
            feedBack: {
                productRating: '',
                deliveryRating: '',
                size: '',
                contactUs: '',
                recommond: '',
                otherFeedabck: '',
            },
        };
    }
    getfbData() {
        let myfbdata = JSON.parse(localStorage.getItem('this.feedback') || '{}');
        let myfbdatanew = JSON.parse(localStorage.getItem('this.customer.feedBack') || '{}');
        // console.log(myfbdata.productRating, typeof myfbdata);
        console.log(myfbdata, typeof myfbdata);
        console.log(myfbdatanew, typeof myfbdatanew);
    }
};
FeedbackCustomer1.styles = css `
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
    state()
], FeedbackCustomer1.prototype, "customer", void 0);
__decorate([
    property()
], FeedbackCustomer1.prototype, "title", void 0);
__decorate([
    state()
], FeedbackCustomer1.prototype, "items", void 0);
FeedbackCustomer1 = __decorate([
    customElement('feeadback-customer1')
], FeedbackCustomer1);
export { FeedbackCustomer1 };
//# sourceMappingURL=customer-feedback1.js.map