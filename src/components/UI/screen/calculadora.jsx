import { useState } from "react";
import estilos from "./calculadora.module.css";
import { usePantalla } from "./usePantalla";
import PanelDeNumeros from "./panelDeNumeros";
const Calculadora = () => {
  const [pantalla, setPantalla] = useState("0");

  function handleClick(valor) {
    if (pantalla == "0") {
      setPantalla(valor);
    } else {
      setPantalla(pantalla + valor);
    }
  }

  function handleSignos(signo) {
    const longitud = pantalla.length;

    if (longitud > 0) {
      const ultimoCaracter = pantalla[longitud - 1];
      // alert(ultimoCaracter);
      if (
        ultimoCaracter !== "*" &&
        ultimoCaracter !== "-" &&
        ultimoCaracter !== "+" &&
        ultimoCaracter !== "/" &&
        ultimoCaracter !== "."
      ) {
        setPantalla(pantalla + signo);
      }
    }
  }

  function handleClear(clear) {
    setPantalla("0");
  }

  function handleIgual() {
    let resultado = eval(pantalla);
    if (!isNaN(resultado)) {
      setPantalla(resultado.toString());
    } else {
      setPantalla("Error");
    }
  }
  return (
    <>
      <h4 className={estilos.resultados}>{pantalla}</h4>
      <PanelDeNumeros
        eventoNum={handleClick}
        eventoSig={handleSignos}
        eventoClear={handleClear}
        eventoIgual={handleIgual}
      />
    </>
  );
};

export default Calculadora;
