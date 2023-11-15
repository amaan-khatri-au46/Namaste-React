import React from "react";
import ReactDOM from "react-dom/client";

// Bascically we will try to Create a structure With
// this is the basic html structure
// this parent is object
// this object is a react element

// ReactElement that the browser understand and it is convert inside the html  through
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Dev Builder"),
    React.createElement("h2", {}, "Local Server"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HMR = Hot Module Replacement"),
    React.createElement("h2", {}, "File Watching Algorithm - Written in c++"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "By Aksay Saini"),
    React.createElement("h2", {}, "Faster Build"),
  ]),
]);

console.log(parent);
// Here We Had Directly Created By H1 tag Simply and Written Hello World Inside In It
// This is What we had Created Object
const heading = React.createElement("h1", { id: "heading" }, "Hello World");

// Here We Had Created Root Now This is Where All The Code Stuff Will Goes
const root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render will convert it into html structure and render it
// if there is anthing already present inside root then it will replace this form here and here only
root.render(parent);
