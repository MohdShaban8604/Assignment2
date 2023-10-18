import Dashboard from "views/Dashboard.js";
import Product from "views/Product.js";
import Customer from "views/Customer.js";
import Income from "views/Income.js";
import Promote from "views/Promote.js";
import Help from "views/Help.js";
import Evano from "views/Evano.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/product",
    name: "Product",
    icon: "nc-icon nc-circle-09",
    component: Product,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "nc-icon nc-notes",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/income",
    name: "Income",
    icon: "nc-icon nc-paper-2",
    component: Income,
    layout: "/admin"
  },
  {
    path: "/promote",
    name: "Promote",
    icon: "nc-icon nc-atom",
    component: Promote,
    layout: "/admin"
  },
  {
    path: "/help",
    name: "Help",
    icon: "nc-icon nc-pin-3",
    component: Help,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name:  "Evano",
    user: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
    component: Evano,
    icon2: "nc-icon nc-stre-down",
    layout: "/admin"
  }

];

export default dashboardRoutes;
