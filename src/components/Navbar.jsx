import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <Container>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">RizLam</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Surah</Link>
            </li>
            <li>
              <Link to="/tafsir">Tafsir</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
