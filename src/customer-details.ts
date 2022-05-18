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
import {FormLayoutResponsiveStep} from '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import {Customer} from './customer';

@customElement('customer-details')
export class CustomerFeedback extends LitElement {
  customer: Customer = new Customer();

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

  protected override render() {
    return html`
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
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-text-field
            label="LastName"
            name="LastName"
            value=${this.customer.LastName}
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
            name="phonenumber"
            value=${this.customer.PhoneNumber}
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
            
            data-checked
            error-message="This field is required"
            @click=${this.handleChange}>
          >
            <vaadin-radio-button 
            label="Male" 
            name="Male"  
             value="Male"
            >
            </vaadin-radio-button>
            <vaadin-radio-button
              label="Female"
              name="Female"
              value="Female"
              
            ></vaadin-radio-button>
          </vaadin-radio-group>
          <vaadin-text-field
            label="City"
            name="City"
            required
            @change=${this.handleChange}
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="State"
            name="State"
            value=${this.customer.State}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>

          <vaadin-text-field
            label="Country"
            name="Country"
            value=${this.customer.Country}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-text-field>
          <vaadin-number-field
            label="PostalCode"
            name="PostalCode"
            value=${this.customer.PostalCode}
            @change=${this.handleChange}
            required
            error-message="This field is required"
          ></vaadin-number-field>
        

        <!-- <vaadin-button theme="primary">Submit</vaadin-button> -->

        <vaadin-horizontal-layout theme="spacing" 
        
    
        >
          <vaadin-button theme="primary" 
          @click ="${this.formsubmit}"
          >Submit</vaadin-button>
          <vaadin-button theme="secondary"
          @click ="${this.formcancel}">Cancel</vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
      </vaadin-form-layout>
      
      <slot></slot>
      </div>

     
        
     
      
    `;
  }

  handleChange(e: {target: {value: any; name?: any}}) {
    const {name, value} = e.target;
    this.customer = {...this.customer, [name]: value};

    // this.customer.FirstName = e.target.value;
    // this.customer.LastName = e.target.value;
    // console.log(`First Name: ${this.customer.FirstName}`);
    // console.log(`Last Name: ${this.customer.LastName}`);
  }
  formsubmit() {
    console.log(JSON.stringify(this.customer, null, 2));
    // console.log(typeof this.customer);
    // this.customer = this.customer;
  }
  formcancel() {
    this.customer = {
      FirstName: '',
      LastName: '',
      PhoneNumber: 0,
      email: '',
      dob: 0,
      Gender: '',

      City: '',
      State: '',
      Country: '',
      PostalCode: '',
    };
    console.log(JSON.stringify(this.customer, null, 2));
  }
}
