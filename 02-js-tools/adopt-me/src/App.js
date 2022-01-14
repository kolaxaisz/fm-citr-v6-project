import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bora",
      animal: "Dog",
      breed: "Puli",
    }),
    React.createElement(Pet, {
      name: "Amigo",
      animal: "Dog",
      breed: "Chinese Crested",
    }),
    React.createElement(Pet, {
      name: "Eszter",
      animal: "Human",
      breed: "Magyar",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
