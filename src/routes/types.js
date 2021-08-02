import React from "react";
import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("access") === "admin" ? (
        <Component {...props} />
      ) : (
        <>
          {toast.error("Oops, you don't have access here!")}
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        </>
      )
    }
  />
);
