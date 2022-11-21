import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="z-10 navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-orange-600 drop-shadow-lg">SmartHard</a>
      </div>
      <div className="flex fixed w-screen justify-center items-center text-center">
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <a>PC Gamers</a>
          </li>
          <li>
            <a>Consolas Gamers</a>
          </li>
          <li>
            <a>Videojuegos</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
   
      <CartWidget />
    </div>

  );
};
export default NavBar;
