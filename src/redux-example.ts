import {customElement} from '@lit/reactive-element/decorators/custom-element';
import {createSlice, configureStore} from '@reduxjs/toolkit';
import {LitElement, render} from 'lit';

@customElement('counter-redux')
export class Counter extends LitElement {
  counterSlice = createSlice({
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
}
// render(){
//     return html`

//     `
// }

export const {incremented, decremented} = counterSlice.actions;

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
