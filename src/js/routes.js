import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Fit from './components/Fit';
import SKU from './components/SKU';

export default {
  path: '/',
  component: Main,
  indexRoute: {component: Dashboard},
  childRoutes: [
    { path: 'fit', component: Fit},
    { path: 'sku', component: SKU}
  ]
};
