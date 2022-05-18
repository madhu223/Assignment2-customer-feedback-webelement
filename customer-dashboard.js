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
import './customer-feedback';
let CustomerFeedback = class CustomerFeedback extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Customer Dashboard';
    }
    render() {
        return html `
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
};
__decorate([
    property()
], CustomerFeedback.prototype, "title", void 0);
CustomerFeedback = __decorate([
    customElement('customer-dashboard')
], CustomerFeedback);
export { CustomerFeedback };
//# sourceMappingURL=customer-dashboard.js.map