import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import NavigationProvider from "../NavContext/NavigationProvider";

const Root = () => {
  return (
    <>
      <NavigationProvider>
        <Nav />
        <div id="detail">
          <Outlet />
        </div>
      </NavigationProvider>
    </>
  );
};

export default Root;
