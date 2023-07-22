import { jsx } from 'alura-elements'

import { mount, useState } from "alura-elements";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  return (
    jsx("div", {className: "container",}, jsx("span", null, counter),jsx("div", {className: "buttons",}, jsx("button", {onClick: handleIncrement}, "increment"),jsx("button", {onClick: handleDecrement}, "decrement"),),)
  );
};

mount(document.getElementById("root"), jsx(App, null, null));

// https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/
// https://cssgradient.io/gradient-backgrounds/