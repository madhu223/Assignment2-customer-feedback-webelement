// import {html, LitElement} from 'lit';
// import {customElement} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
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
import {Feedback} from './feedback';

@customElement('feeadback-customer')
export class FeedbackCustomer extends LitElement {
  @state()
  feedback: Feedback = new Feedback();

  // private fbdata = [{}];
  fbdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
  //
  fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
  custs: Array<object> = [];

  constructor() {
    super();
    for (let i = 0; i < this.fomdata.length; i++) {
      let obj = {
        label: this.fomdata[i].firstName,
        value: this.fomdata[i].customerId,
      };
      this.custs.push(obj);
    }
  }
  //
  regex = /^[0-9]$/;
  static override styles = css`
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
  head = 'Customer Feedback';
  @property()
  override title = ' Tell us how do you think..!';
  @state()
  private items = [
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

  protected override render() {
    return html`
      <h1>${this.head}</h1>
      <div class="container">
        <vaadin-vertical-layout>
          <h2>${this.title}</h2>
          <label>
            <h4>Select customer to give us feedback.</h4>
          </label>
          <vaadin-select
            placeholder="select"
            .items="${this.custs}"
            name="customerId"
            value=${this.feedback.customerId}
            @value-changed=${this.handleChange}
          ></vaadin-select>

          <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-number-field
            name="productRating"
            value=${this.feedback.productRating}
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
            value=${this.feedback.deliveryRating}
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
            value=${this.feedback.size}
            @value-changed=${(e: any) => {
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
            value=${this.feedback.contactUs}
            @value-changed=${(e: any) => {
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
            value=${this.feedback.recommond}
            @value-changed=${this.handleChange}
          ></vaadin-select>

          <label>
            <h4>Would you like to give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            name="otherFeedabck"
            value=${this.feedback.otherFeedabck}
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
          get data</vaadin-button
        > -->
      </div>

      >
    `;
  }
  // validation

  validatefb = () => {
    let errorMessage = '';
    if (this.feedback.productRating == null) {
      // console.log(this.feedback.productRating);
      errorMessage = 'productRating is filed is required';
    }

    //if (this.feedback.productRating !=null !this.regex.test(this.feedback.productRating.toString())) {
    else if (
      !(this.feedback.productRating > 0 && this.feedback.productRating < 10)
    ) {
      errorMessage =
        errorMessage + '\n' + 'Product rating sholud betweeen 0-9!';
    }
    // Delivery rating
    if (!this.feedback.deliveryRating) {
      // console.log(this.feedback.deliveryRating);
      errorMessage =
        errorMessage + '\n' + 'DeliveryRating is filed is required';
    } //if (!this.regex.test(this.feedback.deliveryRating.toString())) {
    else if (
      !(this.feedback.deliveryRating > 0 && this.feedback.deliveryRating < 10)
    ) {
      errorMessage =
        errorMessage + '\n' + 'DeliveryRating sholud betweeen 0-9!';
    }

    //Size
    if (!this.feedback.size) {
      // console.log(this.feedback.productRating);
      errorMessage = errorMessage + '\n' + 'Size is filed is required';
    }
    // Contact us
    if (!this.feedback.contactUs) {
      // console.log(this.feedback.productRating);
      errorMessage = errorMessage + '\n' + 'contact us is filed is required';
    }

    // Recommond
    if (!this.feedback.recommond) {
      // console.log(this.feedback.productRating);
      errorMessage = errorMessage + '\n' + 'Recommond is filed is required';
    }
    if (errorMessage != '') {
      alert(errorMessage);
    }
    return errorMessage;
  };

  handleChange(e: {target: {name: any; value: any}}) {
    const {name, value} = e.target;
    this.feedback = {...this.feedback, [name]: value};
  }
  handleSize(e: any, _key: any) {
    this.feedback.size = e.target.value;
    // console.log((this.feedback.size = e.target.value));
  }
  handleContact(e: any, _key: any) {
    this.feedback.contactUs = e.target.value;
    // console.log((this.feedback.contactUs = e.target.value));
  }

  fbformsubmit() {
    let errorMessage = this.validatefb();
    if (errorMessage == '') {
      console.log(JSON.stringify(this.feedback, null, 2));

      let customers = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].customerId == this.feedback.customerId) {
          customers[i].feedBack = this.feedback;
        }
      }
      console.log(customers);
      localStorage.setItem('this.fomdata', JSON.stringify(customers, null, 2));

      this.fbdata.push({...this.feedback});
      console.log(JSON.stringify(this.fbdata, null, 2));
      if (this.fbdata) {
        localStorage.setItem(
          'this.fbdata',
          JSON.stringify(this.fbdata, null, 2)
        );
      }

      alert('Feedback saved successfully...');

      // localStorage.setItem(
      //   'this.feedback',
      //   JSON.stringify(this.feedback, null, 2)
      // );

      this.feedback = {
        customerId: 0,
        productRating: '',
        deliveryRating: '',
        size: '',
        contactUs: '',
        recommond: '',
        otherFeedabck: '',
      };
    }
  }
  // getfbData() {
  //   let myfbdata = JSON.parse(localStorage.getItem('this.feedback') || '{}');
  //   console.log(myfbdata.productRating, typeof myfbdata);
  //   console.log(myfbdata, typeof myfbdata);
  // }
}
