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
import '@vaadin/dialog';
import '@vaadin/horizontal-layout';
import '@vaadin/checkbox';
import { Customer } from './customer';
import '@vaadin/text-area';
let CustomerDetails = class CustomerDetails extends LitElement {
    constructor() {
        super(...arguments);
        this.customer = new Customer();
        this.fomdata = [{}];
        this.regex = /^[A-Za-z0-9\-]+$/;
        this.emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.title = 'Customer Details';
        this.responsiveSteps = [
            // Use one column by default
            { minWidth: 0, columns: 1 },
            // Use two columns, if layout's width exceeds 500px
            { minWidth: '500px', columns: 2 },
        ];
        this.validate = () => {
            // First Name
            if (this.customer.FirstName === null) {
                // console.log(this.customer.FirstName.valueOf);
                alert('First Name is filed is required');
            }
            if (this.customer.FirstName.length < 3) {
                alert('First Name sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.FirstName)) {
                alert('First Name should contain only alphanumeric and no space!');
            }
            // Lastst Name
            if (this.customer.LastName === null) {
                // console.log(this.customer.LastName.valueOf);
                alert('Last Name is filed is required');
            }
            if (this.customer.LastName.length < 1) {
                alert('Last Name sholud containe min 1 letters');
            }
            if (!this.regex.test(this.customer.LastName)) {
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
            if (!this.customer.PhoneNumber) {
                // console.log(this.customer.PhoneNumber..valueOf);
                alert('PhoneNumber. is filed is required');
            }
            if (this.customer.PhoneNumber.length < 5) {
                alert('PhoneNumber sholud containe min 5 numbers');
            }
            // DOb
            if (!this.customer.dob) {
                // console.log(this.customer.PhoneNumber..valueOf);
                alert('DOb is filed is required');
            }
            // Gender
            if (this.customer.Gender === null) {
                // console.log(this.customer.PhoneNumber..valueOf);
                alert('Gender is filed is required');
            }
            //City
            if (!this.customer.City) {
                // console.log(this.customer.City.valueOf);
                alert('City is filed is required');
            }
            if (this.customer.City.length < 3) {
                alert('City sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.City)) {
                alert('City should contain only alphanumeric and no space!');
            }
            //State
            if (!this.customer.State) {
                // console.log(this.customer.State.valueOf);
                alert('State is filed is required');
            }
            if (this.customer.State.length < 3) {
                alert('State sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.State)) {
                alert('State should contain only alphanumeric and no space!');
            }
            //Country
            if (!this.customer.Country) {
                // console.log(this.customer.Country.valueOf);
                alert('Country is filed is required');
            }
            if (this.customer.Country.length < 3) {
                alert('Country sholud containe min 3 letters');
            }
            if (!this.regex.test(this.customer.Country)) {
                alert('Country should contain only alphanumeric and no space!');
            }
            // PostalCode
            if (this.customer.PostalCode === null) {
                // console.log(this.customer.PostalCode..valueOf);
                alert('PostalCode. is filed is required');
            }
            if (this.customer.PostalCode.length < 5) {
                alert('PostalCode sholud containe min 5 numbers');
            }
        };
        // formcancel() {
        //   this.customer = {
        //     FirstName: '',
        //     LastName: '',
        //     // PhoneNumber: 0,
        //     PhoneNumber: '',
        //     email: '',
        //     // dob: 0,
        //     dob: '',
        //     Gender: '',
        //     City: '',
        //     State: '',
        //     Country: '',
        //     PostalCode: '',
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
            value=${this.customer.FirstName}
            @input=${this.handleChange}
            required
            error-message="This field is required"
            minlength=3
       
          ></vaadin-text-field>
          <vaadin-text-field
            label="LastName"
            name="LastName"
            minlength=1
            value=${this.customer.LastName}
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
            name="PhoneNumber"
            value=${this.customer.PhoneNumber}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
         

          <vaadin-date-picker
            name="dob"
            label="D.O.B"
            value=${this.customer.dob}
            @value-changed=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-date-picker>
          
          <vaadin-radio-group
            label="Gender"
            
            theme="horizontal"
            @click=${this.handleChange}
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
            name="City"
            required
            value=${this.customer.City}
            @input=${this.handleChange}
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="State"
            name="State"
            value=${this.customer.State}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="Country"
            name="Country"
            value=${this.customer.Country}
         
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-number-field
            label="PostalCode"
            name="PostalCode"
            value=${this.customer.PostalCode}
            @input=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
          <!-- <vaadin-checkbox 
            label='Feedback'
            name='Feedback'
            
            .value=${this.customer}
              @checked-changed=${this.handleChange}
          >

          </vaadin-checkbox> -->
        
          <!-- <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-number-field
            name="ProductRating"
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
            name="OtherFeedabck"
            @change=${this.handleChange}
          ></vaadin-text-area> -->

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
        // this.customer.LastName = e.target.value;
        // console.log(`First Name: ${this.customer.FirstName}`);
        // console.log(`Last Name: ${this.customer.LastName}`);
    }
    formsubmit() {
        // let regex = /^[A-Za-z0-9\-]+$/;
        this.validate();
        console.log('This is data :', JSON.stringify(this.customer, null, 2));
        // console.log(typeof this.customer);
        // this.customer = this.customer;
        this.fomdata.push({ ...this.customer });
        console.log(JSON.stringify(this.fomdata, null, 2));
        localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
        // localStorage.setItem(
        //   'this.customer',
        //   JSON.stringify(this.customer, null, 2)
        // );
        // this.customer.LastName = '';
        // this.customer = {} as Customer;
        console.log(JSON.stringify(this.customer, null, 2), typeof this.customer);
        //  {<a href="/" style="color:white;text-decoration:none"></a>} ;
        // this.customer.FirstName = '';
        // this.customer.LastName = '';
        // this.customer.PhoneNumber = '';
        // email: '',
        // dob: '',
        // Gender: '',
        // City: '',
        // State: '',
        // Country: '',
        // PostalCode: '',
        // this.customer = {
        //   FirstName: '',
        //   LastName: '',
        //   PhoneNumber: '',
        //   email: '',
        //   dob: '',
        //   Gender: '',
        //   City: '',
        //   State: '',
        //   Country: '',
        //   PostalCode: '',
        // };
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
        // mydata.PostalCode,
        // typeof mydata.PostalCode,
        // mydata.FirstName,
        typeof mydata);
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
  `;
__decorate([
    property()
], CustomerDetails.prototype, "title", void 0);
CustomerDetails = __decorate([
    customElement('customer-details')
], CustomerDetails);
export { CustomerDetails };
//# sourceMappingURL=customer-details.js.map