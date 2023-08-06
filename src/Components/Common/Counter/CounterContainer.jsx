import Counter from "./Counter"
import { useState } from "react"

const CounterContainer = ({ agregarAlCarrito, stock,cantidadEnCarrito=1/*  (si llega undefinided ponele 1) */ }) => {
  const [counter, setCounter] = useState(cantidadEnCarrito);
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