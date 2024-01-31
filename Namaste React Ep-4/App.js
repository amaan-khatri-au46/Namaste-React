import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { DropDown } from "./Components/DropDown";

/**
 *
 * Header
 * - Logo
 * - Nav Items
 * Main
 * - Search Input
 * - Reasturant Container
 *    * Reastaurant Card
 *    * Image
 * Name of Res, Star Ratting, cuisine delivery tie
 * Footer
 * Copy Right
 * Links
 * Address
 * Contact
 */

const AppLayout = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Main /> */}
      <DropDown />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
