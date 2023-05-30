import { useState } from "react";

const Titulo = () => {

    const [titulo, setTitulo] = useState("Hola amiguito")
    const cambiarTitulo = () => {
        setTitulo("Hola amiguito(con estado modificado)")
    }
  return (
    


    <div>
      <h1>{titulo}</h1>
      <button onClick={cambiarTitulo}>click</button>
    </div>
  );
};

export default Titulo;
