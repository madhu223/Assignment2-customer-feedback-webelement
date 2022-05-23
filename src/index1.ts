import {Router} from '@vaadin/router';
import './customer-dashboard';
import './customer-details';
import './customer-feedback1';
import './feedback-customer';
import './not-found';
// window.addEventListener('load', () => {
//   initRouter();
// });
// function initRouter() {}
const router = new Router(document.getElementById('outlet'));
// const router = new Router(document.querySelector('main'));

// const {Router} = window.Vaadin;
//   const outlet = document.getElementById('outlet');
//   const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'customer-dashboard'},
  {path: '/customer', component: 'customer-details'},
  {path: '/feedback', component: 'feeadback-customer'},
  {path: '(.*)', component: 'not-found'},
]);
