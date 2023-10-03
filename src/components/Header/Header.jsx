import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import st from "../Header/Header.module.scss";
import closeImg from "../../assets/images/close.svg";

function Header() {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <header>
      <div className="container">
        <div className={st.header}>
          <div className={`${active ? st.logo__active : st.logo}`}>
            <p className={`${active && st.logo__active}`}>
              <Link to="/">LINGO</Link>
            </p>
          </div>
          <nav
            className={`${st.desktop} ${
              active ? st.navigation_active : st.navigation
            }`}
          >
            <NavLink to="/" onClick={closeMenu}>
              Главная
            </NavLink>
            <NavLink to="/learn" onClick={closeMenu}>
              Учить
            </NavLink>
            <NavLink to="/vocabulary" onClick={closeMenu}>
              Словарь
            </NavLink>
          </nav>
          {active ? (
            <img
              className={st.menu__active}
              onClick={handleMenu}
              src={closeImg}
              alt="close"
            ></img>
          ) : (
            <p className={st.menu} onClick={handleMenu}>
              Меню
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
