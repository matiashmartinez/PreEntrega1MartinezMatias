import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "./data/data";

export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  /* products = [
    {
      id: 1,
      nombre: "Notebook Gamer TUF",
      descripcion:
        "Notebook ASUS TUF Intel i5 1135g 16GB RAM 1tb SSD - Windows 11",
      precio: 102.999,
      stock: 15,
      image: "prod1.jpg",
    },
    {
      id: 2,
      nombre: "Notebook ASUS x777",
      descripcion: "Notebook AMD Ryzen 5 - 8GB RAM - SSD NVME 2TB",
      precio: 159000.0,
      stock: 6,
      image: "notebook-asus.png",
    },
    {
      id: 3,
      nombre: "Notebook Gamer",
      descripcion:
        "NOTEBOOK GIGABYTE AORUS 17 XE I7 12700H 16GB SSD 1TB RTX 3070TI 17.3 W11",
      precio: 160000.0,

      stock: 6,
      image: "prod2.jpg",
    },
    {
      id: 4,
      nombre: "Notebook ",
      descripcion: "Notebook Intel i5 - 16GB RAM - 256GB SSD",
      precio: 144000.0,
      stock: 6,
      image: "prod2.jpg",
    },
  ]; */

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getProducts.then((res) => {
      setDatos(res);
    });
  }, []);

  return (
    <div className="bg-slate-900 ">
      <ItemList datos={datos} />
    </div>
  );
};

export default ItemListContainer