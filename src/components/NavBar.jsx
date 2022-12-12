import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 h-1 flex-row">
      <div className="flex ">
        <a className="btn btn-ghost normal-case text-xl text-orange-600 drop-shadow-lg">
          SmartHard
        </a>
      </div>
      <div className="  w-screen justify-center items-center text-center navbar  sticky top-0 z-50">
        <ul className="menu menu-horizontal bg-base-100  p-2">
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
        
        </ul>
      </div>

      <CartWidget />
    </div>
  );
};
export default NavBar;
