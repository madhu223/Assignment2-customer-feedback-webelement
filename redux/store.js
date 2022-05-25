import { reducer } from './reducer';
// import { redux } from './redux'
import { configureStore } from '@reduxjs/toolkit';
// import redux from 'redux';
// const createStore = redux.createStore;
// const Add_Customer = 'Add_Customer';
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
//# sourceMappingURL=store.js.map