import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
@customElement('not-found')
export class NotFound extends LitElement {
  @property()
  override title = 'Not Found';

  protected override render() {
    return html` <h3>${this.title}</h3> `;
  }
}
