const Item = (p) => {
  return (
    <div className="bg-white ">
      <ul className="">
        <h5 className="text-gray-900">{p.nombre}</h5>
        <img className="image-product2" src={p.image} alt={p.nombre} />
        <br />
        <h2>{p.precio}</h2>
        <br />
        {/* <p>{p.codigo}</p> */}
      </ul>
    </div>
  );
};

export default Item;
