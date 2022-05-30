var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, render } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './customer';
// import '@vaadin/vaadin-text-field';
// import '@vaadin/vaadin-button';
// import '@vaadin/vaadin-checkbox';
// import '@vaadin/vaadin-radio-button/vaadin-radio-button';
// import '@vaadin/vaadin-radio-button/vaadin-radio-group';
// import '@vaadin/text-field/src/vaadin-text-field';
// import '@vaadin/button/src/vaadin-button';
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
//
import '@vaadin/button';
import '@vaadin/dialog';
import '@vaadin/horizontal-layout';
import '@vaadin/text-field';
import '@vaadin/vertical-layout';
import '@vaadin/select';
import '@vaadin/text-area';
import { guard } from 'lit/directives/guard.js';
import { Feedback } from './feedback';
//
let CustomerDetails = class CustomerDetails extends LitElement {
    constructor() {
        super(...arguments);
        this.customer = new Customer();
        // private fomdata = [{}];
        this.fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
        this.regex = /^[A-Za-z0-9\-]+$/;
        this.emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.title = 'Customer Details';
        this.responsiveSteps = [
            // Use one column by default
            { minWidth: 0, columns: 1 },
            // Use two columns, if layout's width exceeds 500px
            { minWidth: '500px', columns: 2 },
        ];
        //
        this.fdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
        // fdata1 = this.fdata.shift();
        this.fulldata = [{}];
        // @state()
        this.dialogOpened = false;
        this.feedback = new Feedback();
        // private fbdata = [{}];
        this.fbdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
        this.regex1 = /^[0-9]$/;
        this.head = 'Customer Feedback';
        this.title1 = ' Tell us how do you think..!';
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
        // handlefbChange(e: {target: {value: any; name?: any}}) {
        //   const {name, value} = e.target;
        //   this.customer.feedBack = {...this.customer.feedBack, [name]: value};
        //   console.log(this.customer.feedBack);
        // }
        this.validate = () => {
            // First Name
            if (this.customer.firstName === null) {
                // console.log(this.customer.firstName.valueOf);
                alert('First Name is filed is required');
            }
            if (this.customer.firstName.length < 3) {
                alert('First Name sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.firstName)) {
                alert('First Name should contain only alphanumeric and no space!');
            }
            // Lastst Name
            if (this.customer.lastName === null) {
                // console.log(this.customer.lastName.valueOf);
                alert('Last Name is filed is required');
            }
            if (this.customer.lastName.length < 1) {
                alert('Last Name sholud containe min 1 letters');
            }
            if (!this.regex.test(this.customer.lastName)) {
                alert('Last Name should contain only alphanumeric and no space!');
            }
            // email
            if (this.customer.email === null) {
                // console.log(this.customer.email.valueOf);
                alert('email is filed is required');
            }
            if (!this.emailRegex.test(this.customer.email)) {
                alert('Invalid email format !');
            }
            if (this.customer.email.length < 3) {
                alert('email sholud containe min 3 letters');
            }
            // Phone Number
            if (!this.customer.phoneNumber) {
                // console.log(this.customer.phoneNumber..valueOf);
                alert('phoneNumber. is filed is required');
            }
            if (this.customer.phoneNumber.length < 5) {
                alert('phoneNumber sholud containe min 5 numbers');
            }
            // DOb
            if (!this.customer.dob) {
                // console.log(this.customer.phoneNumber..valueOf);
                alert('DOb is filed is required');
            }
            // Gender
            if (this.customer.gender === null) {
                // console.log(this.customer.phoneNumber..valueOf);
                alert('Gender is filed is required');
            }
            //city
            if (!this.customer.city) {
                // console.log(this.customer.city.valueOf);
                alert('city is filed is required');
            }
            if (this.customer.city.length < 3) {
                alert('city sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.city)) {
                alert('city should contain only alphanumeric and no space!');
            }
            //state
            if (!this.customer.state) {
                // console.log(this.customer.state.valueOf);
                alert('state is filed is required');
            }
            if (this.customer.state.length < 3) {
                alert('state sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.state)) {
                alert('state should contain only alphanumeric and no space!');
            }
            //country
            if (!this.customer.country) {
                // console.log(this.customer.country.valueOf);
                alert('country is filed is required');
            }
            if (this.customer.country.length < 3) {
                alert('country sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.country)) {
                alert('country should contain only alphanumeric and no space!');
            }
            // postalCode
            if (this.customer.postalCode === null) {
                // console.log(this.customer.postalCode..valueOf);
                alert('postalCode. is filed is required');
            }
            if (this.customer.postalCode.length < 5) {
                alert('postalCode sholud containe min 5 numbers');
            }
        };
    }
    //
    render() {
        return html `
        <h2>${this.title}</h2>

        
      <div class="container" >
        <!-- <h2>Customer Feedback</h2> -->

        <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
          <!-- <vaadin-vertical-layout theme="spacing padding">   </vaadin-vertical-layout> -->
          <!-- placeholder="Enter firstName" -->
          <vaadin-text-field
            label="FirstName"
            name="firstName"
            value=${this.customer.firstName}
            @input=${this.handleChange}
            required
            error-message="This field is required"
            minlength=3
       
          ></vaadin-text-field>
          <vaadin-text-field
            label="LastName"
            name="lastName"
            minlength=1
            value=${this.customer.lastName}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-email-field
            label="Email address"
            required
            error-message="This field is required"
            name="email"
            value=${this.customer.email}
            @input=${this.handleChange}
            error-message="Please enter a valid email address"
          ></vaadin-email-field>
          <vaadin-number-field
            label="Phone Number"
            name="phoneNumber"
            value=${this.customer.phoneNumber}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
         

          <vaadin-date-picker
            name="dob"
            label="D.O.B"
            value=${this.customer.dob}
            @change =${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-date-picker>
          
          <vaadin-radio-group
            label="Gender"
           
              theme="horizontal"
              value=${this.customer.gender}
            @value-changed =${(e) => {
            this.handleGender(e, 'gender');
        }}
                >
            <vaadin-radio-button
            label="Male"
            name="Gender"
            value="Male"
              >
            </vaadin-radio-button>
            <vaadin-radio-button
              label="Female"
              name="Gender"
              value="Female"
              
              ></vaadin-radio-button>
            </vaadin-radio-group>

          <vaadin-text-field
            label="City"
            name="city"
            required
            value=${this.customer.city}
            @input=${this.handleChange}
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="State"
            name="state"
            value=${this.customer.state}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="Country"
            name="country"
            value=${this.customer.country}
         
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-number-field
            label="PostalCode"
            name="postalCode"
            value=${this.customer.postalCode}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
          <!-- <vaadin-checkbox 
            label='Feedback'
            name='feedBack'
            
            value=  ${this.customer}
            @click =${this.handleChange}
          >

          </vaadin-checkbox> -->
        
          <!-- <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-number-field
            name="productRating"
            value=${this.customer}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          >
          </vaadin-number-field>
          <label>
            <h4>Would you give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            name="otherFeedabck"
            value=${this.customer}
            @change=${this.handleChange}
          ></vaadin-text-area>  -->

        <!-- <vaadin-button theme="primary">Submit</vaadin-button> -->

        <vaadin-horizontal-layout theme="spacing" 
        
    
        >
          <vaadin-button  theme="primary" 
          @click ="${this.formsubmit}"
          >Submit </vaadin-button>
          <vaadin-button theme="secondary"
          >
          <a href="/" style="color:Blue;text-decoration:none"
          >Back</a>
          </vaadin-button>
          <vaadin-button theme="primary"
          >
          <a href="/feedback" style="color:white;text-decoration:none; width:30px"
          >Feedback </a>
          </vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
      </vaadin-form-layout>
      
      <slot></slot>
      </div>

<!--      
      <vaadin-button theme="primary" 
          @click ="${this.getData}"
          >
        get data</vaadin-button> -->

        
        <div class="container1">
        <vaadin-dialog
        aria-label="Create new employee"
        .opened="${this.dialogOpened}"
        @opened-changed="${(e) => (this.dialogOpened = e.detail.value)}"
        .renderer="${guard([], () => (root) => {
            render(html `
              <h1>${this.head}</h1>
              <vaadin-vertical-layout
                theme="spacing"
                style="width: 600px; max-width: 100%; align-items: stretch;"
              >
                <h2
                  style="margin: var(--lumo-space-m) 0 0 0; font-size: 1.5em; font-weight: bold;"
                >
                  Create new employee
                </h2>
                <vaadin-vertical-layout style="align-items: stretch;">
                  <!-- <vaadin-text-field label="First name"></vaadin-text-field>
                  <vaadin-text-field label="Last name"></vaadin-text-field> -->
                  <h3>${this.title1}</h3>

                  <label>
                    <h4>How do you rate the quality of the product ?</h4>
                  </label>
                  <vaadin-number-field
                    name="productRating"
                    value=${this.feedback.productRating}
                    @input=${this.handlefbChange}
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
                    @input=${this.handlefbChange}
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
                    value=${this.feedback.contactUs}
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
                    value=${this.feedback.recommond}
                    @value-changed=${this.handlefbChange}
                  ></vaadin-select>

                  <label>
                    <h4>Would you like to give any other feedback to us ?</h4>
                  </label>
                  <vaadin-text-area
                    name="otherFeedabck"
                    value=${this.feedback.otherFeedabck}
                    @change=${this.handlefbChange}
                  ></vaadin-text-area>

                  <vaadin-horizontal-layout theme="spacing">
                    <vaadin-button @click="${this.fbformsubmit}" theme="primary"
                      >Submit</vaadin-button
                    >
                    <vaadin-button theme="secondary">Cancel</vaadin-button>
                  </vaadin-horizontal-layout>
                </vaadin-vertical-layout>

                <vaadin-horizontal-layout
                  theme="spacing"
                  style="justify-content: flex-end"
                >
                  <vaadin-button @click="${() => (this.dialogOpened = false)}">
                    Cancel
                  </vaadin-button>
                  <vaadin-button
                    theme="primary"
                    @click="${() => (this.dialogOpened = false)}"
                  >
                    Save
                  </vaadin-button>
                </vaadin-horizontal-layout>
              </vaadin-vertical-layout>
            `, root);
        })}"
      ></vaadin-dialog>

      <vaadin-button @click="${() => (this.dialogOpened = true)}">
        Feedback
      </vaadin-button>



        </div>

     
      
    `;
    }
    //
    handlefbChange(e) {
        const { name, value } = e.target;
        this.feedback = { ...this.feedback, [name]: value };
    }
    handleSize(e, _key) {
        this.feedback.size = e.target.value;
        // console.log((this.feedback.size = e.target.value));
    }
    handleContact(e, _key) {
        this.feedback.contactUs = e.target.value;
        // console.log((this.feedback.contactUs = e.target.value));
    }
    fbformsubmit() {
        // this.validatefb();
        console.log(JSON.stringify(this.feedback, null, 2));
        this.fbdata.push({ ...this.feedback });
        console.log(JSON.stringify(this.fbdata, null, 2));
        if (this.fbdata) {
            localStorage.setItem('this.fbdata', JSON.stringify(this.fbdata, null, 2));
        }
        // localStorage.setItem(
        //   'this.feedback',
        //   JSON.stringify(this.feedback, null, 2)
        // );
        this.feedback = {
            // fbcustomerId: 0,
            productRating: '',
            deliveryRating: '',
            size: '',
            contactUs: '',
            recommond: '',
            otherFeedabck: '',
        };
    }
    //
    handleChange(e) {
        const { name, value } = e.target;
        this.customer = { ...this.customer, [name]: value };
    }
    // this.customer.firstName = e.target.value;
    // this.customer.lastName = e.target.value;
    // console.log(`First Name: ${this.customer.firstName}`);
    // console.log(`Last Name: ${this.customer.lastName}`);
    handleGender(e, _key) {
        this.customer.gender = e.target.value;
        // console.log((this.customer.gender = e.target.value));
    }
    formsubmit() {
        // let regex = /^[A-Za-z0-9\-]+$/;
        this.validate();
        console.log('This is data :', JSON.stringify(this.customer, null, 2));
        // console.log(typeof this.customer);
        // this.customer = this.customer;
        // this.fomdata.push({ ...this.customer });
        this.fomdata.push({ ...this.customer });
        console.log(JSON.stringify(this.fomdata, null, 2));
        localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
        // localStorage.setItem(
        //   'this.customer',
        //   JSON.stringify(this.customer, null, 2)
        // );
        // this.customer.lastName = '';
        // this.customer = {} as Customer;
        console.log(JSON.stringify(this.customer, null, 2), typeof this.customer);
        //  {<a href="/" style="color:white;text-decoration:none"></a>} ;
        // this.customer.firstName = '';
        // this.customer.lastName = '';
        // this.customer.phoneNumber = '';
        // email: '',
        // dob: '',
        // Gender: '',
        // city: '',
        // state: '',
        // country: '',
        // postalCode: '',
        this.customer = {
            customerId: 0,
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
    getData() {
        // let data = {...this.customer};
        // let myData = JSON.stringify(JSON.parse(localStorage.getItem('data')));
        // console.log(data, myData, typeof data, typeof myData);
        // console.log(
        //   localStorage.getItem('this.customer'),
        //   typeof localStorage.getItem('this.customer')
        // );
        let mydata = JSON.parse(localStorage.getItem('this.customer') || '{}');
        console.log(mydata);
    }
};
CustomerDetails.styles = css `
    h2 {
      text-align: center;
      color: blue;
    }

    .container {
      /* text-align: center; */
      width: 60vw;
      display: flex;
      justify-content: center;
      margin: auto;
    }
    //
    h1 {
      text-align: center;
    }
    h3 {
      color: blue;
    }
    .container1 {
      text-align: center;
      width: 100vw;
      display: flex;
      justify-content: center;
    }

    //
  `;
__decorate([
    state()
], CustomerDetails.prototype, "customer", void 0);
__decorate([
    property()
], CustomerDetails.prototype, "title", void 0);
__decorate([
    state()
], CustomerDetails.prototype, "dialogOpened", void 0);
__decorate([
    state()
], CustomerDetails.prototype, "feedback", void 0);
__decorate([
    property()
], CustomerDetails.prototype, "title1", void 0);
__decorate([
    state()
], CustomerDetails.prototype, "items", void 0);
CustomerDetails = __decorate([
    customElement('customer-details1')
], CustomerDetails);
export { CustomerDetails };
//# sourceMappingURL=customer-details1.js.map