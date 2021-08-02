// Pages
import Admin from "../views/Admin";
import Home from "../views/Home";

const routing = {
  admin: [
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
  ],
  public: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/home",
      name: "Homepage",
      component: Home,
    },
  ],
};
export default routing;
