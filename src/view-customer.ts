import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import '@vaadin/number-field';
import '@vaadin/button';
@customElement('view-customer')
export class ViewCustomer extends LitElement {
  // Customerdata
  @state()
  data = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
  //Feddback
  @state()
  fdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
  Id: number;
  constructor() {
    super();
    this.Id = 0;
  }
  //   Id = 0;
  @property()
  override title = 'View Customer Details';

  handleview(e: {target: {value: any}}) {
    this.Id = e.target.value - 1;
    console.log(this.Id);
    this.data = JSON.parse(localStorage.getItem('this.fomdata') || '[]');
    this.fdata = JSON.parse(localStorage.getItem('this.fbdata') || '[]');
    console.log(this.data[this.Id]);
    console.log(this.fdata[this.Id]);
  }
  //   getview() {
  //     this.render();
  //   }

  override render() {
    console.log(this.Id);
    // console.log(`${this.data[`${this.Id}`].firstName}`);

    return html`
      <h2 style=" text-align: center;">${this.title}</h2>
      <div
        class="container"
        style="  width: 30vw;
   
      justify-content: center;
      margin: auto; "
      >
        <vaadin-number-field
          label="CustomerId"
          @input=${this.handleview}
        ></vaadin-number-field>
        <!-- <vaadin-button @click=${this}>click</vaadin-button> -->

        <p>CustomerId : <b> ${this.data[this.Id].customerId} </b></p>
        <p>FirstName : <b> ${this.data[this.Id].firstName} </b></p>
        <p>LastName : <b> ${this.data[this.Id].lastName} </b></p>
        <p>Email ID : <b> ${this.data[this.Id].email} </b></p>
        <p>Gender : <b> ${this.data[this.Id].gender} </b></p>
        <p>DOB : <b> ${this.data[this.Id].dob} </b></p>
        <p>Phone Number : <b> ${this.data[this.Id].phoneNumber} </b></p>
        <p><b>Address</b> :</p>
        <p>City : <b> ${this.data[this.Id].city} </b></p>
        <p>State : <b> ${this.data[this.Id].state} </b></p>
        <p>Country : <b> ${this.data[this.Id].country} </b></p>
        <p>PostalCode : <b> ${this.data[this.Id].postalCode} </b></p>
        <p><b>Feedback</b> :</p>

        <p>ProductRating : <b> ${this.fdata[this.Id].productRating} </b></p>
        <p>DeliveryRating : <b> ${this.fdata[this.Id].deliveryRating} </b></p>
        <p>Size : <b> ${this.fdata[this.Id].size} </b></p>
        <p>ContactUs : <b> ${this.fdata[this.Id].contactUs} </b></p>
        <p>Recommond : <b> ${this.fdata[this.Id].recommond} </b></p>
        <p>OtherFeedabck : <b> ${this.fdata[this.Id].otherFeedabck} </b></p>
      </div>
    `;
  }
}
