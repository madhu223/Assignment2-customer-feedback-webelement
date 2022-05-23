import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@vaadin/grid';
import '@vaadin/split-layout';
// import { applyTheme } from 'Frontend/generated/theme';
import './customer-details';
import './customer-feedback1';
// import {Router} from '@vaadin/router';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { Grid } from 'ag-grid-community';

@customElement('customer-dashboard')
export class CustomerDashboard extends LitElement {
  data = JSON.parse(localStorage.getItem('this.fomdata') || '{}');

  fdata = JSON.parse(localStorage.getItem('this.fbdata') || '{}');
  @property()
  override title = 'Customer Dashboard';
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
  protected override render() {
    return html`
      <h2>${this.title}</h2>
      <!-- <a href="/customer">Add Customer</a> -->

      <vaadin-button theme="primary" style="align-text:center">
        <a href="/customer" style="color:white;text-decoration:none"
          >Add Customer</a
        >
      </vaadin-button>
      <!-- <vaadin-grid .items="${this.data}">
        <vaadin-grid-column path="firstName"></vaadin-grid-column>
        <vaadin-grid-column path="lastName"></vaadin-grid-column>
        <vaadin-grid-column path="email"></vaadin-grid-column>
        <vaadin-grid-column path="profession"></vaadin-grid-column>
      </vaadin-grid> -->
      <vaadin-split-layout>
        <div>
          <vaadin-grid .items="${this.data}">
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
}
