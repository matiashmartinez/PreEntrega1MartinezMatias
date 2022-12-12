const Item = (p) => {
  return (
    <div className="bg-white  max-w-md  ">
      <ul className="p-2 	flex-col  ">
        <h5 className="text-gray-900 text-center content-center">{p.nombre}</h5>
        <div className="flex align-middle content-center m-2 p-2 ml-10 ">
          <img width="150" height="150" src={p.image} alt={p.nombre} />
        </div>

        <div className="display  mr-1">
          <h2 className="ml-6 mr-6 content-center text-lg border-b-2 bg-amber-500 border-spacing-1 from-orange-300 text-center text-zinc-900 m-0 p-0">
            $ {p.precio}
          </h2>
        </div>
      </ul>
    </div>
  );
};

export default Item;
