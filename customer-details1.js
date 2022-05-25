var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
import '@vaadin/horizontal-layout';
import { Customer } from './customer';
let CustomerFeedback = class CustomerFeedback extends LitElement {
    constructor() {
        super(...arguments);
        this.customer = new Customer();
        this.fomdata = [{}];
        this.title = 'Customer Details';
        this.responsiveSteps = [
            // Use one column by default
            { minWidth: 0, columns: 1 },
            // Use two columns, if layout's width exceeds 500px
            { minWidth: '500px', columns: 2 },
        ];
        // formcancel() {
        //   this.customer = {
        //     FirstName: '',
        //     lastName: '',
        //     // PhoneNumber: 0,
        //     PhoneNumber: '',
        //     email: '',
        //     // dob: 0,
        //     dob: '',
        //     Gender: '',
        //     City: '',
        //     State: '',
        //     Country: '',
        //     postalCode: '',
        //   };
        //   console.log(JSON.stringify(this.customer, null, 2));
        // }
    }
    render() {
        return html `
        <h2>${this.title}</h2>
      <div class="container" >
        <!-- <h2>Customer Feedback</h2> -->

        <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
          <!-- <vaadin-vertical-layout theme="spacing padding">   </vaadin-vertical-layout> -->
          <!-- placeholder="Enter FirstName" -->
          <vaadin-text-field
            label="FirstName"
            name="FirstName"
            value=${this.customer.firstName}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-text-field
            label="LastName"
            name="lastName"
            value=${this.customer.lastName}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-email-field
            label="Email address"
            required
            error-message="This field is required"
            name="email"
            value=${this.customer.email}
            @change=${this.handleChange}
            error-message="Please enter a valid email address"
          ></vaadin-email-field>
          <vaadin-number-field
            label="Phone Number"
            name="phoneNumber"
            value=${this.customer.phoneNumber}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
         

          <vaadin-date-picker
            name="dob"
            label="D.O.B"
            value=${this.customer.dob}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-date-picker>
          
          <vaadin-radio-group
            label="Gender"
            
       
            theme="horizontal"
            
            >
         
            <vaadin-radio-button
            label="Male"
            name="Gender"
            value="Male"
            @value-changed=${this.handleChange}
           
            >
            </vaadin-radio-button>
            <vaadin-radio-button
              label="Female"
              name="Gender"
              value="Female"
              @value-changed=${this.handleChange}
             
            ></vaadin-radio-button>
            </vaadin-radio-group>

          <vaadin-text-field
            label="City"
            name="city"
            required
            value=${this.customer.city}
            @change=${this.handleChange}
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="State"
            name="state"
            value=${this.customer.state}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="Country"
            name="country"
            value=${this.customer.country}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-number-field
            label="PostalCode"
            name="postalCode"
            value=${this.customer.postalCode}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
        

        <!-- <vaadin-button theme="primary">Submit</vaadin-button> -->

        <vaadin-horizontal-layout theme="spacing" 
        
    
        >
          <!-- <vaadin-button  theme="primary" 
          @click ="${this.formsubmit}"
          >Submit</vaadin-button>
          <vaadin-button theme="secondary"
         >Cancel</vaadin-button> -->
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
      </vaadin-form-layout>
      
      <slot></slot>
      </div>

     
      <vaadin-button theme="primary" 
          @click ="${this.getData}"
          >
        get data</vaadin-button>
     
      
    `;
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.customer = { ...this.customer, [name]: value };
        // this.customer.FirstName = e.target.value;
        // this.customer.lastName = e.target.value;
        // console.log(`First Name: ${this.customer.FirstName}`);
        // console.log(`Last Name: ${this.customer.lastName}`);
    }
    formsubmit() {
        if (this.customer !== null) {
            // console.log(this.customer.FirstName);
            console.log('This is data :', JSON.stringify(this.customer, null, 2));
        }
        // console.log(typeof this.customer);
        // this.customer = this.customer;
        this.fomdata.push({ ...this.customer });
        console.log(JSON.stringify(this.fomdata, null, 2));
        localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
        localStorage.setItem('this.customer', JSON.stringify(this.customer, null, 2));
        // this.customer.FirstName = '';
        // this.customer = {} as Customer;
        console.log(JSON.stringify(this.customer, null, 2), typeof this.customer);
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
        console.log(
        // mydata.PhoneNumber,
        // typeof mydata.PhoneNumber,
        mydata.Gender, typeof mydata.Gender, 
        // mydata.dob,
        // mydata.City,
        // mydata.State,
        // mydata.Country,
        // mydata.postalCode,
        // typeof mydata.postalCode,
        // mydata.FirstName,
        typeof mydata);
    }
};
CustomerFeedback.styles = css `
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
  `;
__decorate([
    property()
], CustomerFeedback.prototype, "title", void 0);
CustomerFeedback = __decorate([
    customElement('customer-details')
], CustomerFeedback);
export { CustomerFeedback };
//# sourceMappingURL=customer-details1.js.map