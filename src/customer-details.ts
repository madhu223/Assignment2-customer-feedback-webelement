import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
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
import {FormLayoutResponsiveStep} from '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/checkbox';
import {Customer} from './customer';

import '@vaadin/text-area';

@customElement('customer-details')
export class CustomerDetails extends LitElement {
  customer: Customer = new Customer();
  fomdata = [{}];
  regex = /^[A-Za-z0-9\-]+$/;
  emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  static override styles = css`
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

  @property()
  override title = 'Customer Details';
  private responsiveSteps: FormLayoutResponsiveStep[] = [
    // Use one column by default
    {minWidth: 0, columns: 1},
    // Use two columns, if layout's width exceeds 500px
    {minWidth: '500px', columns: 2},
  ];
  errors: any;

  protected override render() {
    return html`
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
            @value-changed =${(e: any) => {
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
             @value-changed =${this.handleChange}
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

     
      <vaadin-button theme="primary" 
          @click ="${this.getData}"
          >
        get data</vaadin-button>
     
      
    `;
  }

  handleChange(e: {target: {value: any; name?: any}}) {
    const {name, value} = e.target;
    this.customer = {...this.customer, [name]: value};

    // this.customer.firstName = e.target.value;
    // this.customer.lastName = e.target.value;
    // console.log(`First Name: ${this.customer.firstName}`);
    // console.log(`Last Name: ${this.customer.lastName}`);
  }

  handleGender(e: any, _key: any) {
    this.customer.gender = e.target.value;
    // console.log((this.customer.gender = e.target.value));
  }

  validate = () => {
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

  formsubmit() {
    // let regex = /^[A-Za-z0-9\-]+$/;
    this.validate();

    console.log('This is data :', JSON.stringify(this.customer, null, 2));
    // console.log(typeof this.customer);
    // this.customer = this.customer;

    this.fomdata.push({...this.customer});
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
    // this.customer = {
    //   firstName: '',
    //   lastName: '',
    //   phoneNumber: '',
    //   email: '',
    //   dob: '',
    //   gender: '',

    //   city: '',
    //   state: '',
    //   country: '',
    //   postalCode: '',
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
      // mydata.phoneNumber,
      // typeof mydata.phoneNumber,

      mydata.Gender,
      typeof mydata.Gender,
      // mydata.dob,
      // mydata.city,
      // mydata.state,
      // mydata.country,
      // mydata.postalCode,
      // typeof mydata.postalCode,
      // mydata.firstName,
      typeof mydata
    );
  }
  // formcancel() {
  //   this.customer = {
  //     firstName: '',
  //     lastName: '',
  //     // phoneNumber: 0,
  //     phoneNumber: '',
  //     email: '',
  //     // dob: 0,
  //     dob: '',
  //     Gender: '',

  //     city: '',
  //     state: '',
  //     country: '',
  //     postalCode: '',
  //   };
  //   console.log(JSON.stringify(this.customer, null, 2));
  // }
}
