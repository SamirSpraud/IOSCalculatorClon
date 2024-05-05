import BotonBase from "../buttons/boton";
import estilos from "../buttons/botonNumero.module.css";
import "../../../styles/botonesGeneral.css";
import Panel from "./panelDeNumeros.module.css";
import estilo from "./calculadora.module.css";
import { useState } from "react";


const PanelDeNumeros = ({eventoNum,eventoSig,eventoClear,eventoIgual}) => {


  return (
    <div className={`${Panel.panel} btnGen`}>

      <div className="fila">
        <BotonBase estilo={estilos.botonEsp} caracter={"AC"} evento={eventoClear}></BotonBase>
        <BotonBase estilo={estilos.botonEsp} caracter={"±"} evento={()=>alert("No implementado")}></BotonBase>
        <BotonBase estilo={estilos.botonEsp} caracter={"%"} evento={() => eventoSig("%")}></BotonBase>
        <BotonBase estilo={estilos.botonSim} caracter={"÷"}  evento={() => eventoSig("/")}></BotonBase>
      </div>
      <div className="fila">
        <BotonBase estilo={estilos.botonNum} caracter={"7"} evento={()=> eventoNum("7")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"8"} evento={()=> eventoNum("8")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"9"} evento={()=> eventoNum("9")}></BotonBase>
        <BotonBase estilo={estilos.botonSim} caracter={"×"} evento={() => eventoSig("*")}></BotonBase>
      </div>
      <div className="fila">
        <BotonBase estilo={estilos.botonNum} caracter={"4"} evento={()=> eventoNum("4")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"5"} evento={()=> eventoNum("5")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"6"} evento={()=> eventoNum("6")}></BotonBase>
        <BotonBase estilo={estilos.botonSim} caracter={"-"} evento={() => eventoSig("-")}></BotonBase>
      </div>
      <div className="fila">
        <BotonBase estilo={estilos.botonNum} caracter={"1"} evento={()=> eventoNum("1")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"2"} evento={()=> eventoNum("2")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"3"} evento={()=> eventoNum("3")}></BotonBase>
        <BotonBase estilo={estilos.botonSim} caracter={"+"} evento={() => eventoSig("+")}></BotonBase>
      </div>
      <div className="fila">
        <BotonBase estilo={estilos.botonNumL} caracter={"0"} evento={()=> eventoNum("0")}></BotonBase>
        <BotonBase estilo={estilos.botonNum} caracter={"."} evento={() => eventoSig(".")}></BotonBase>
        <BotonBase estilo={estilos.botonSim} caracter={"="} evento={()=> eventoIgual()}></BotonBase>
      </div>
    </div>
  );
};

export default PanelDeNumeros;
