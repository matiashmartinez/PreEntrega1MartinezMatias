import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div>
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl  ">
        {/* <p>{greeting}</p> */}

        <li className="p-2 list-none ">
          {datos.map((p) => (
            <div className="p-1 w-100  ">
              <Item
                image={p.image}
                nombre={p.nombre}
                precio={p.precio}
                codigo={p.codigo}
              />
              <ItemCount stock={p.stock} />
            </div>
          ))}
        </li>
      </div>
    </div>
  );
};
export default ItemList;
