import { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cant, setCant] = useState(0);

  const incrementar = () => {
    setCant(cant + 1);
  };

  const descontar = () => {
    setCant(cant - 1);
  };

  useEffect(() => {
    console.log("Se cambió cantidad");
  }, []);

  return (
    <div>
      <button className="btn" onClick={descontar} disabled={cant <= 0}>
        -
      </button>
      <span className="p2 m-2  text-white">{cant}</span>
      <button className="btn" onClick={incrementar} disabled={cant >= stock}>
        +
      </button>
      <button className=" btn-primary p-2 m-4" disabled={stock <= 0}>
       <p>Agregar</p> 
      </button>
    </div>
  );
};
export default ItemCount;
