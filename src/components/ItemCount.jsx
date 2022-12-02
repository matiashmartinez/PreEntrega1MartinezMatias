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
    <div className=" bg-black max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-1 m-1 text-center ">
        <button
          className="item-count-descontar "
          onClick={descontar}
          disabled={cant <= 0}
        >
          -
        </button>
        <span className="p2 m2 text-center ">{cant}</span>
        <button
          className="item-count-descontar"
          onClick={incrementar}
          disabled={cant >= stock}
        >
          +
        </button>
        <button className=" item-count-add2" disabled={stock <=0}>Agregar</button>
      </div>

      
        
      </div>
   
  );
};
export default ItemCount;
