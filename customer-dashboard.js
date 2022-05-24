var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/grid';
import '@vaadin/split-layout';
// import { applyTheme } from 'Frontend/generated/theme';
import './customer-details';
import './customer-feedback1';
import './feedback-customer';
// import {Router} from '@vaadin/router';
import '@vaadin/grid/vaadin-grid-selection-column.js';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { Grid } from 'ag-grid-community';
let CustomerDashboard = class CustomerDashboard extends LitElement {
    constructor() {
        super(...arguments);
        this.data = JSON.parse(localStorage.getItem('this.fomdata') || '{}');
        this.data1 = this.data.shift();
        this.fdata = JSON.parse(localStorage.getItem('this.fbdata') || '{}');
        this.fdata1 = this.fdata.shift();
        this.fulldata = [{}];
        this.title = 'Customer Dashboard';
    }
    // @state()
    // private data = [
    //   {...JSON.parse(localStorage.getItem('this.customer') || '{}')},
    // ];
    // private items = [
    //   {
    //     firstName: 'David',
    //     lastName: 'Warner',
    //     email: 'dwabc@redif.com',
    //     profession: 'Cricketer',
    //   },
    //   {
    //     firstName: 'Mahesh',
    //     lastName: 'Babu',
    //     email: 'ssmb@redif.com',
    //     profession: 'Actor',
    //   },
    //   {
    //     firstName: 'Balu',
    //     lastName: 'S P',
    //     email: 'SPB@redif.com',
    //     profession: 'Singer',
    //   },
    // ];
    render() {
        return html `
      <h2>${this.title}</h2>
      <!-- <a href="/customer">Add Customer</a> -->

      <vaadin-button theme="primary" style="align-text:center">
        <a href="/customer" style="color:white;text-decoration:none"
          >Add Customer</a
        >
      </vaadin-button>
      <!-- <vaadin-grid .items="${this.data1}">
        <vaadin-grid-column path="firstName"></vaadin-grid-column>
        <vaadin-grid-column path="lastName"></vaadin-grid-column>
        <vaadin-grid-column path="email"></vaadin-grid-column>
        <vaadin-grid-column path="profession"></vaadin-grid-column>
      </vaadin-grid> -->
      <vaadin-split-layout>
        <div>
          <vaadin-grid .items="${this.data}">
            <!-- <vaadin-grid-selection-column></vaadin-grid-selection-column> -->
            <vaadin-grid-column path="FirstName"> </vaadin-grid-column>
            <vaadin-grid-column path="LastName"></vaadin-grid-column>
            <vaadin-grid-column path="email"></vaadin-grid-column>
            <!-- <vaadin-grid-column path="City"></vaadin-grid-column> -->
          </vaadin-grid>
        </div>

        <div>
          <vaadin-grid .items="${this.fdata}">
            <vaadin-grid-column path="ProductRating"></vaadin-grid-column>
            <vaadin-grid-column path="DeliveryRating"></vaadin-grid-column>
            <!-- <vaadin-grid-column path="Recommond"></vaadin-grid-column> -->
            <vaadin-grid-column path="OtherFeedabck"></vaadin-grid-column>
            <!-- <vaadin-grid-column path="ContactUs"></vaadin-grid-column> -->
          </vaadin-grid>
        </div>
      </vaadin-split-layout>
      <!-- <vaadin-split-layout style="max-height: 90vh;">
        <customer-details> </customer-details>
        <customer-feedback></customer-feedback>
      </vaadin-split-layout> -->
      <!-- for(){
      

    } -->

      <vaadin-button @click=${this.fetchData}> Fetch Data </vaadin-button>
    `;
    }
    // handleCustomer() {
    //   console.log('Adding Customer');
    //   return html`
    //     <!-- <script>
    //       router.setRoutes([{path: '/', redirect: 'customer-dashboard'}]);
    //     </script> -->
    //     <!-- <a href="/customer">Customer</a> -->
    //     <!-- <customer-details> </customer-details> -->
    //   `;
    // }
    fetchData() {
        // for (const key in this.data) {
        //   console.log(
        //     `${key}: ${this.data[key].FirstName} ${this.data[key].LastName}${this.data[key].email}`
        //   );
        //   // console.log('Phone number is :', `{${this.data[key].PhoneNumber}`);
        //   // console.log(`${key}: ${this.data[key].dob}`);
        //   // console.log(`${key}: ${this.data[key].City}`);
        // }
        // console.log(this.data, this.fdata, typeof this.data, typeof this.fdata);
        console.log((this.fulldata = [this.data, this.fdata]));
    }
};
__decorate([
    property()
], CustomerDashboard.prototype, "title", void 0);
CustomerDashboard = __decorate([
    customElement('customer-dashboard')
], CustomerDashboard);
export { CustomerDashboard };
//# sourceMappingURL=customer-dashboard.js.map