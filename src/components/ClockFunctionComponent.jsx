import { useEffect, useState } from "react";

const ClockFunctionComponent = () => {
  const initialstate = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [state, setState] = useState(initialstate);

  const tick = () => {
    setState((state) => {
      let edad = state.edad + 1;
      return {
        ...state,
        fecha: new Date(),
        edad,
      };
    });
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};
export default ClockFunctionComponent;
