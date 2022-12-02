import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [datos, setDatos] = useState([]);
  const products = [
    {
      codigo: "cod1",
      nombre: "pc gamer 1",
      precio: 102.999,
      stock: 15,
      image: "prod1.jpg",
    },
    {
      codigo: "cod2",
      nombre: "pc gamer 2",
      precio: 159.0,
      stock: 6,
      image: "prod2.jpg",
    },
    {
      codigo: "cod3",
      nombre: "pc gamer 2",
      precio: 159.0,
      stock: 6,
      image: "prod2.jpg",
    },
    {
      codigo: "cod4",
      nombre: "pc gamer 2",
      precio: 159.0,
      stock: 6,
      image: "prod2.jpg",
    },
  ];

  useEffect(() => {
    const getProducts = new Promise((resolve) => {  
      setTimeout(() => {
        resolve(products)
      }, 3000);
    });
    getProducts.then( (res) =>{
      setDatos(res)
    })
  }, []);

  return (
    <div>
      <ItemList datos={datos} />
    </div>
  );
};
export default ItemListContainer;
