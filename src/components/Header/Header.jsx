import { Link, NavLink } from "react-router-dom";
import st from "../Header/Header.module.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={st.header}>
          <div className={st.logo}>
            <p>
              <Link to="/">LINGO</Link>
            </p>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/vocabulary">Vocabulary</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
