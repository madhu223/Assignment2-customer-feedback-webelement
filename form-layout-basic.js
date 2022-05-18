var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/form-layout';
// import  from '@vaadin/form-layout';
import '@vaadin/password-field';
import '@vaadin/text-field';
// import {applyTheme} from 'Frontend/generated/theme';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/radio-group/src/vaadin-radio-group';
import '@vaadin/radio-group/src/vaadin-radio-button';
let Example = class Example extends LitElement {
    constructor() {
        super(...arguments);
        this.responsiveSteps = [
            // Use one column by default
            { minWidth: 0, columns: 1 },
            // Use two columns, if layout's width exceeds 500px
            { minWidth: '500px', columns: 2 },
        ];
    }
    createRenderRoot() {
        const root = super.createRenderRoot();
        // Apply custom theme (only supported if your app uses one)
        // applyTheme(root);
        return root;
    }
    render() {
        return html `
      <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
        <vaadin-text-field label="First name"></vaadin-text-field>
        <vaadin-text-field label="Last name"></vaadin-text-field>
        <!-- Stretch the username field over 2 columns -->
        <vaadin-text-field
          data-colspan="2"
          label="Username"
        ></vaadin-text-field>
        <vaadin-password-field label="Password"></vaadin-password-field>
        <vaadin-password-field label="Confirm password"></vaadin-password-field>
      </vaadin-form-layout>
      <vaadin-radio-group label="Travel class" theme="vertical">
        <vaadin-radio-button
          value="economy"
          label="Economy"
        ></vaadin-radio-button>
        <vaadin-radio-button
          value="business"
          label="Business"
        ></vaadin-radio-button>
        <vaadin-radio-button
          value="firstClass"
          label="First Class"
        ></vaadin-radio-button>
      </vaadin-radio-group>
    `;
    }
};
Example = __decorate([
    customElement('form-layout-basic')
], Example);
export { Example };
//# sourceMappingURL=form-layout-basic.js.map