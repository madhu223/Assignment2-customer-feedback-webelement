import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import '@vaadin/text-field';
import '@vaadin/email-field';
import '@vaadin/number-field';
import '@vaadin/radio-group';
import '@vaadin/vertical-layout';
import '@vaadin/date-picker';

import '@vaadin/button';
import '@vaadin/radio-group/src/vaadin-radio-button';
import '@vaadin/form-layout';
// import {FormLayoutResponsiveStep} from '@vaadin/form-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/form-layout/vaadin-form-item';
import '@vaadin/vertical-layout';
import '@vaadin/list-box';
import '@vaadin/select';
import '@vaadin/text-area';
// import {Employee} from 'feedback-form ';

@customElement('customer-feedback')
export class CustomerFeedback extends LitElement {
  static override styles = css`
    h1 {
      text-align: center;
    }
    h2 {
      color: blue;
    }
    .container {
      text-align: center;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  `;
  @property()
  head = 'Customer Feedback';
  override title = ' Tell us how do you think..!';
  @property()
  employee: any;

  @state()
  private items = [
    {
      label: 'select',
      value: 'select',
    },
    {
      label: 'May be',
      value: 'May be',
    },
    {
      label: 'May not be',
      value: 'May not be',
    },
  ];
  private charLimit = 300;

  @state()
  private text = '';

  protected override render() {
    return html`
      <h1>${this.head}</h1>
      <div class="container">
        <vaadin-vertical-layout>
          <h2>${this.title}</h2>

          <label>
            <h4>How do you rate the quality of the product ?</h4>
          </label>
          <vaadin-text-field required error-message="This field is required">
          </vaadin-text-field>

          <label>
            <h4>How do you rate the speed of delivery ?</h4>
          </label>
          <vaadin-text-field required error-message="This field is required">
          </vaadin-text-field>

          <label>
            <h4>How do you find the sizing of the product ?</h4>
          </label>
          <vaadin-radio-group theme="vertical">
            <vaadin-radio-button
              value="Too small"
              label="Too small"
              checked
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="Just Right"
              label="Just Right"
              checked
            ></vaadin-radio-button>

            <vaadin-radio-button
              value="Too Large"
              label="Too Large"
              checked
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you like to contact us for different sizing?</h4>
          </label>
          <vaadin-radio-group>
            <vaadin-radio-button
              value="Yes"
              label="Yes"
              checked
            ></vaadin-radio-button>
            <vaadin-radio-button
              value="No"
              label="No"
              checked
            ></vaadin-radio-button>
          </vaadin-radio-group>

          <label>
            <h4>Would you recommond our product to others ?</h4>
          </label>
          <vaadin-select
            .items="${this.items}"
            .value="${this.items[0].value}"
          ></vaadin-select>

          <label>
            <h4>Would you give any other feedback to us ?</h4>
          </label>
          <vaadin-text-area
            .maxlength="${this.charLimit}"
            .value="${this.text}"
            @value-changed="${(e: CustomEvent) => (this.text = e.detail.value)}"
            .helperText="${`${this.text.length}/${this.charLimit}`}"
          ></vaadin-text-area>

          <vaadin-horizontal-layout theme="spacing">
            <vaadin-button theme="primary">Submit</vaadin-button>
            <vaadin-button theme="secondary">Cancel</vaadin-button>
          </vaadin-horizontal-layout>
        </vaadin-vertical-layout>
      </div>
    `;
  }
}
