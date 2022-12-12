import { useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "./data/data";
import { useState } from "react";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    console.log(products);
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getProducts.then((res) => {
      setDatos(res);
    });
  }, []);

  return <ItemList datos={datos} />;
};
export default ItemDetailContainer;
