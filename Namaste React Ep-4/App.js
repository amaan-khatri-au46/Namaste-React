import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Add } from "./add";

const Title = () => (
  <div>
    <h1 id="heading">Nasmaste React Ep -3</h1>
  </div>
);

// THis is What A Component Composition
const FirstComponent = () => (
  <div>
    <Title />
    <h1 id="heading">Namaste React with function Component</h1>
    <Add />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <FirstComponent />
  </>
);
