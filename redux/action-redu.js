var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createSlice, configureStore } from '@reduxjs/toolkit';
let ActionRedu = class ActionRedu extends LitElement {
    // const mapStateToProps = (state: { counter: any; }) => {
    //     return {
    //         counter: state.counter
    //     }
    // }
    // const mapDispatchToProps = { increment, decrement, reset }
    // export default connect(mapStateToProps)(ActionRedu , 'action-redu');
    render() {
        return html ` <h2>This is Redux example</h2> `;
    }
};
ActionRedu = __decorate([
    customElement('action-redu')
], ActionRedu);
export { ActionRedu };
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});
export const { incremented, decremented } = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer,
});
// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
//# sourceMappingURL=action-redu.js.map