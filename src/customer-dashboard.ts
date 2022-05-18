import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@vaadin/grid';
import '@vaadin/split-layout';
// import { applyTheme } from 'Frontend/generated/theme';
import './customer-details';
import './customer-feedback';

@customElement('customer-dashboard')
export class CustomerFeedback extends LitElement {
  @property()
  override title = 'Customer Dashboard';

  protected override render() {
    return html`
      <h2>${this.title}</h2>
      <!-- <vaadin-grid>
        <vaadin-grid-column path="firstName"></vaadin-grid-column>
        <vaadin-grid-column path="lastName"></vaadin-grid-column>
        <vaadin-grid-column path="email"></vaadin-grid-column>
        <vaadin-grid-column path="profession"></vaadin-grid-column>
      </vaadin-grid> -->

      <vaadin-split-layout style="max-height: 90vh;">
        <customer-details> </customer-details>
        <customer-feedback></customer-feedback>
      </vaadin-split-layout>
    `;
  }
}
