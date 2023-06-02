import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';

const Titulo = () => {
  const [titulo, setTitulo] = useState("Hola amiguito");
  const cambiarTitulo = () => {
    setTitulo("Hola amiguito(con estado modificado)");
  };
  return (
    <div className="text-center">
      <h1>{titulo}</h1>
      <button onClick={cambiarTitulo} className="btn btn-outline-danger ">
        click
      </button>
    </div>
  );
};

export default Titulo;
