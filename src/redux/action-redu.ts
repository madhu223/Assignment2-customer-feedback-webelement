import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {createSlice, configureStore} from '@reduxjs/toolkit';

@customElement('action-redu')
export class ActionRedu extends LitElement {
  // const mapStateToProps = (state: { counter: any; }) => {
  //     return {
  //         counter: state.counter
  //     }
  // }
  // const mapDispatchToProps = { increment, decrement, reset }
  // export default connect(mapStateToProps)(ActionRedu , 'action-redu');
  protected override render() {
    return html` <h2>This is Redux example</h2> `;

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
  }
}
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
