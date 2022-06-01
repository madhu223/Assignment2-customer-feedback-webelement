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
let FeedbackCustomer = class FeedbackCustomer extends LitElement {
    constructor() {
        super();
        //   @state()
        //   feedback: Feedback = new Feedback();
        // Customerdata
        this.fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
        // private fbdata = [{}];
        //   fbdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
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
        //   ${this.data[this.Id].feedBack.productRating}
        this.validatefb = () => {
            let errorMessage = '';
            if (this.fomdata[this.Id].feedBack.productRating == null) {
                // console.log(this.fomdata[this.Id].feedBack.productRating);
                errorMessage = 'productRating is filed is required';
            }
            //if (this.fomdata[this.Id].feedBack.productRating !=null !this.regex.test(this.fomdata[this.Id].feedBack.productRating.toString())) {
            else if (!(this.fomdata[this.Id].feedBack.productRating > 0 &&
                this.fomdata[this.Id].feedBack.productRating < 10)) {
                errorMessage =
                    errorMessage + '\n' + 'Product rating sholud betweeen 0-9!';
            }
            // Delivery rating
            if (!this.fomdata[this.Id].feedBack.deliveryRating) {
                // console.log(this.fomdata[this.Id].feedBack.deliveryRating);
                errorMessage =
                    errorMessage + '\n' + 'DeliveryRating is filed is required';
            } //if (!this.regex.test(this.fomdata[this.Id].feedBack.deliveryRating.toString())) {
            else if (!(this.fomdata[this.Id].feedBack.deliveryRating > 0 &&
                this.fomdata[this.Id].feedBack.deliveryRating < 10)) {
                errorMessage =
                    errorMessage + '\n' + 'DeliveryRating sholud betweeen 0-9!';
            }
            //Size
            if (!this.fomdata[this.Id].feedBack.size) {
                // console.log(this.fomdata[this.Id].feedBack.productRating);
                errorMessage = errorMessage + '\n' + 'Size is filed is required';
            }
            // Contact us
            if (!this.fomdata[this.Id].feedBack.contactUs) {
                // console.log(this.fomdata[this.Id].feedBack.productRating);
                errorMessage = errorMessage + '\n' + 'contact us is filed is required';
            }
            // Recommond
            if (!this.fomdata[this.Id].feedBack.recommond) {
                // console.log(this.feedback.productRating);
                errorMessage = errorMessage + '\n' + 'Recommond is filed is required';
            }
            if (errorMessage != '') {
                alert(errorMessage);
            }
            return errorMessage;
        };
        this.Id = 0;
    }
    handleview(e) {
        this.Id = e.target.value - 1;
        console.log(this.Id);
        this.fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
        // this.fdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
        console.log(this.fomdata[this.Id]);
        // console.log(this.fdata[this.Id]);
    }
    render() {
        return html `
      <h1>${this.head}</h1>
      <div class="container">
        <vaadin-vertical-layout>
          <h2>${this.title}</h2>
          <vaadin-number-field
            label="CustomerId"
            @input=${this.handleview}
          ></vaadin-number-field>

          <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-number-field
            name="productRating"
            value=${this.fomdata[this.Id].feedBack.productRating}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          >
          </vaadin-number-field>

          <label>
            <h4>How do you rate the speed of delivery ?</h4>
          </label>
          <vaadin-number-field
            name="deliveryRating"
            value=${this.fomdata[this.Id].feedBack.deliveryRating}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          >
          </vaadin-number-field>

          <label>
            <h4>How do you find the sizing of the product ?</h4>
          </label>
          <vaadin-radio-group
            theme="vertical"
            value=${this.fomdata[this.Id].feedBack.size}
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
            value=${this.fomdata[this.Id].feedBack.contactUs}
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
            value=${this.fomdata[this.Id].feedBack.recommond}
            @value-changed=${this.handleChange}
          ></vaadin-select>

          <label>
            <h4>Would you like to give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            name="otherFeedabck"
            value=${this.fomdata[this.Id].feedBack.otherFeedabck}
            @change=${this.handleChange}
          ></vaadin-text-area>

          <vaadin-horizontal-layout theme="spacing">
            <vaadin-button @click="${this.fbformsubmit}" theme="primary"
              >Submit</vaadin-button
            >
            <vaadin-button theme="secondary">Cancel</vaadin-button>
          </vaadin-horizontal-layout>
        </vaadin-vertical-layout>

        <!-- <vaadin-button theme="primary" @click="${this}">
          get fomdata</vaadin-button
        > -->
      </div>

      >
    `;
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.fomdata[this.Id].feedBack = {
            ...this.fomdata[this.Id].feedBack,
            [name]: value,
        };
    }
    handleSize(e, _key) {
        this.fomdata[this.Id].feedBack.size = e.target.value;
        // console.log((this.fomdata[this.Id].feedBack.size = e.target.value));
    }
    handleContact(e, _key) {
        this.fomdata[this.Id].feedBack.contactUs = e.target.value;
        // console.log((this.fomdata[this.Id].feedBack.contactUs = e.target.value));
    }
    fbformsubmit() {
        // localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
        // this.fomdata.push({...this.fomdata[this.Id]});
        // console.log(JSON.stringify(this.fomdata[this.Id], null, 2));
        // console.log(this.fomdata);
        let errorMessage = this.validatefb();
        if (errorMessage == '') {
            console.log(JSON.stringify(this.fomdata[this.Id], null, 2));
            // this.fomdata.push({...this.fomdata[this.Id]});
            console.log(JSON.stringify(this.fomdata, null, 2));
            if (this.fomdata[this.Id]) {
                localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
            }
            alert('Feedback saved successfully...');
            // localStorage.setItem(
            //   'this.feedback',
            //   JSON.stringify(this.feedback, null, 2)
            // );
            this.fomdata[this.Id].feedBack = {
                productRating: '',
                deliveryRating: '',
                size: '',
                contactUs: '',
                recommond: '',
                otherFeedabck: '',
            };
        }
    }
};
FeedbackCustomer.styles = css `
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
], FeedbackCustomer.prototype, "fomdata", void 0);
__decorate([
    property()
], FeedbackCustomer.prototype, "title", void 0);
__decorate([
    state()
], FeedbackCustomer.prototype, "items", void 0);
FeedbackCustomer = __decorate([
    customElement('feeadback-customernew')
], FeedbackCustomer);
export { FeedbackCustomer };
//# sourceMappingURL=feedback-customernew.js.map