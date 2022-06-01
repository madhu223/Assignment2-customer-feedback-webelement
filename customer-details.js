var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
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
// import './customer-details1';
let CustomerDetails = class CustomerDetails extends LitElement {
    constructor() {
        super();
        this.customer = new Customer();
        // private fomdata = [{}];
        this.fomdata = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
        // private customerData = JSON.parse(
        //   localStorage.getItem('customerData') || '[]'
        // );
        this.regex = /^[A-Za-z0-9\-]+$/;
        this.emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.title = 'Customer Details';
        this.responsiveSteps = [
            // Use one column by default
            { minWidth: 0, columns: 1 },
            // Use two columns, if layout's width exceeds 500px
            { minWidth: '500px', columns: 2 },
        ];
        // handlefbChange(e: {target: {value: any; name?: any}}) {
        //   const {name, value} = e.target;
        //   this.customer.feedBack = {...this.customer.feedBack, [name]: value};
        //   console.log(this.customer.feedBack);
        // }
        this.validate = () => {
            let errorMessage = '';
            if (this.customer.firstName == null || this.customer.firstName == '') {
                // console.log(this.customer.firstName.valueOf);
                errorMessage = 'First Name is filed is required';
            }
            else if (this.customer.firstName.length < 3) {
                errorMessage = 'First Name sholud containe min 3 letters';
            }
            else if (!this.regex.test(this.customer.firstName)) {
                errorMessage =
                    'First Name should contain only alphanumeric and no space!';
            }
            // Lastst Name
            if (this.customer.lastName == null || this.customer.lastName == '') {
                // console.log(this.customer.lastName.valueOf);
                errorMessage = errorMessage + '\n' + 'Last Name is filed is required';
            }
            else {
                if (this.customer.lastName.length < 1) {
                    errorMessage =
                        errorMessage + '\n' + 'Last Name sholud containe min 1 letters';
                }
                if (!this.regex.test(this.customer.lastName)) {
                    errorMessage =
                        errorMessage +
                            '\n' +
                            'Last Name should contain only alphanumeric and no space!';
                }
            }
            // email
            if (this.customer.email == null) {
                // console.log(this.customer.email.valueOf);
                errorMessage = errorMessage + '\n' + 'Email is filed is required';
            }
            else {
                if (!this.emailRegex.test(this.customer.email)) {
                    errorMessage = errorMessage + '\n' + 'Invalid email format';
                }
                if (this.customer.email.length < 3) {
                    errorMessage =
                        errorMessage + '\n' + 'Email sholud containe min 3 letters';
                }
            }
            // Phone Number
            if (!this.customer.phoneNumber) {
                // console.log(this.customer.phoneNumber..valueOf);
                errorMessage = errorMessage + '\n' + 'PhoneNumber. is filed is required';
            }
            else if (this.customer.phoneNumber.length < 5) {
                errorMessage =
                    errorMessage + '\n' + 'PhoneNumber sholud containe min 5 numbers';
            }
            // DOb
            if (!this.customer.dob) {
                // console.log(this.customer.phoneNumber..valueOf);
                errorMessage = errorMessage + '\n' + 'DOb is filed is required';
            }
            // Gender
            if (this.customer.gender === null) {
                // console.log(this.customer.phoneNumber..valueOf);
                errorMessage = errorMessage + '\n' + 'Gender is filed is required';
            }
            //city
            if (!this.customer.city) {
                // console.log(this.customer.city.valueOf);
                errorMessage = errorMessage + '\n' + 'City is filed is required';
            }
            else if (this.customer.city.length < 3) {
                errorMessage = errorMessage + '\n' + 'City sholud containe min 3 letters';
            }
            else if (!this.regex.test(this.customer.city)) {
                errorMessage =
                    errorMessage +
                        '\n' +
                        'City should contain only alphanumeric and no space!';
            }
            //state
            if (!this.customer.state) {
                // console.log(this.customer.state.valueOf);
                errorMessage = errorMessage + '\n' + 'State is filed is required';
            }
            else if (this.customer.state.length < 3) {
                errorMessage =
                    errorMessage + '\n' + 'State sholud containe min 3 letters';
            }
            else if (!this.regex.test(this.customer.state)) {
                errorMessage =
                    errorMessage +
                        '\n' +
                        'State should contain only alphanumeric and no space!';
            }
            //country
            if (!this.customer.country) {
                // console.log(this.customer.country.valueOf);
                errorMessage = errorMessage + '\n' + 'Country is filed is required';
            }
            else if (this.customer.country.length < 3) {
                errorMessage =
                    errorMessage + '\n' + 'Country sholud containe min 3 letters';
            }
            else if (!this.regex.test(this.customer.country)) {
                errorMessage =
                    errorMessage +
                        '\n' +
                        'Country should contain only alphanumeric and no space!';
            }
            // postalCode
            if (this.customer.postalCode == null) {
                // console.log(this.customer.postalCode..valueOf);
                errorMessage = errorMessage + '\n' + 'PostalCode is filed is required';
            }
            else if (this.customer.postalCode.length < 5) {
                errorMessage =
                    errorMessage + '\n' + 'PostalCode sholud containe min 5 numbers';
            }
            if (errorMessage != '') {
                alert(errorMessage);
            }
            return errorMessage;
        };
        this.maxCustomerId = parseInt(localStorage.getItem('maxCustomerId') || '0');
        this.maxCustomerId++;
    }
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
        <!-- <customer-details1></customer-details1> -->
     
      
    `;
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.customer = { ...this.customer, [name]: value };
    }
    // this.customer.firstName = e.target.value;
    // this.customer.lastName = e.target.value;
    // console.log(`First Name: ${this.customer.firstName}`);
    // console.log(`Last Name: ${this.customer.lastName}`;
    handleGender(e, _key) {
        this.customer.gender = e.target.value;
        // console.log((this.customer.gender = e.target.value));
    }
    formsubmit() {
        // let regex = /^[A-Za-z0-9\-]+$/;
        // this.validate();
        let errorMessage = this.validate();
        if (errorMessage == '') {
            console.log('This is data :', JSON.stringify(this.customer, null, 2));
            // console.log(typeof this.customer);
            // this.customer = this.customer;
            this.customer.customerId = this.maxCustomerId;
            console.log(this.customer.customerId, this.customer);
            this.fomdata.push({ ...this.customer });
            // this.customerData.push({...this.customer});
            console.log(JSON.stringify(this.fomdata, null, 2));
            localStorage.setItem('this.fomdata', JSON.stringify(this.fomdata, null, 2));
            // localStorage.setItem(
            //   'customerData',
            //   JSON.stringify(this.customerData, null, 2)
            // );
            localStorage.setItem('maxCustomerId', this.maxCustomerId + '');
            alert('Customer saved successfully...');
            // this.fomdata.push({...this.customer});
            // console.log(JSON.stringify(this.fomdata, null, 2));
            // localStorage.setItem(
            //   'this.fomdata',
            //   JSON.stringify(this.fomdata, null, 2)
            // );
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
                    customerId: '',
                    productRating: '',
                    deliveryRating: '',
                    size: '',
                    contactUs: '',
                    recommond: '',
                    otherFeedabck: '',
                },
            };
        }
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
        // mydata.phoneNumber,
        // typeof mydata.phoneNumber,
        mydata.Gender, typeof mydata.Gender, 
        // mydata.dob,
        // mydata.city,
        // mydata.state,
        // mydata.country,
        // mydata.postalCode,
        // typeof mydata.postalCode,
        // mydata.firstName,
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
    state()
], CustomerDetails.prototype, "customer", void 0);
__decorate([
    property()
], CustomerDetails.prototype, "title", void 0);
CustomerDetails = __decorate([
    customElement('customer-details')
], CustomerDetails);
export { CustomerDetails };
//# sourceMappingURL=customer-details.js.map