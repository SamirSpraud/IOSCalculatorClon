const BotonBase = ({evento, caracter, estilo}) => {
  return <button className={estilo} onClick={evento}>{caracter}</button>;
};

export default BotonBase;
