import { mount, useState } from "alura-elements";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  return (
    <div className="container">
      <span>{counter}</span>

      <div className="buttons">
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};

mount(document.getElementById("root"), <App />);

// https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/
// https://cssgradient.io/gradient-backgrounds/