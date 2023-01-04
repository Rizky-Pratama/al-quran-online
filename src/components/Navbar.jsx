import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-white bg-stone-900">
      <div className="container h-16 flex justify-between items-center">
        <div className="flex items-center">
          <a className="text-2xl font-semibold">RizLam</a>
        </div>
        <div className="">
          <ul className="p-0 flex">
            <li className="flex items-center">
              <Link to="/" className="py-2 px-4 text-base font-medium rounded-sm transition  hover:bg-white hover:text-stone-900">
                Surah
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/tafsir" className="py-2 px-4 text-base font-medium rounded-sm transition  hover:bg-white hover:text-stone-900">
                Tafsir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
