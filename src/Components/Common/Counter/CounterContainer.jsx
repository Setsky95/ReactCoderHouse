import Counter from "./Counter"
import { useState } from "react"

const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const [counter, setCounter] = useState(1);
  return (
    <Counter
      stock={stock}
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default CounterContainer;