var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let NotFound = class NotFound extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Not Found';
    }
    render() {
        return html ` <h3>${this.title}</h3> `;
    }
};
__decorate([
    property()
], NotFound.prototype, "title", void 0);
NotFound = __decorate([
    customElement('not-found')
], NotFound);
export { NotFound };
//# sourceMappingURL=not-found.js.map