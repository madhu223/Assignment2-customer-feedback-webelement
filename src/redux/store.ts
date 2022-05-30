import {reducer} from './reducer';
// import { redux } from './redux'

import {configureStore} from '@reduxjs/toolkit';
// import redux from 'redux';
// import {initLitStore} from 'redux-lit';
// const createStore = redux.createStore;

// const Add_Customer = 'Add_Customer';
// const store = initLitStore(
//   configureStore({
//     reducer: {
//       customerdata: reducer,
//     },
//   })
// );
export const store = configureStore({
  reducer: {
    customerdata: reducer,
  },
});

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default configureStore({
// 	reducer: {},
// });

// const store = createStore(reducer);
