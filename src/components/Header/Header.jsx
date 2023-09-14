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
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/learn">Учить</NavLink>
            <NavLink to="/vocabulary">Словарь</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
