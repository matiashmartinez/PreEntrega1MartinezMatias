import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div>
      <div className="w-auto   ">
        {/* <p>{greeting}</p> */}

        <li className="p-2 list-none flex">
          {datos.map((p) => (
            <div className="p-1 w-100  ">
              <Item
                image={p.image}
                nombre={p.nombre}
                precio={p.precio}
                codigo={p.codigo}
              />
              <div className=" bg-slate-800 flex ">
                <ItemCount stock={p.stock} />
              </div>
            </div>
          ))}
        </li>
      </div>
    </div>
  );
};
export default ItemList;
