import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/">
        <img src="./src/img/logo.jpg" alt="logo" width={100} />
      </Link>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        ТОВАРИ
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/categories"
      >
        КАТЕГОРІЇ
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/cart"
      >
        КОШИК
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/login"
      >
        АВТОРИЗАЦІЯ
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/register"
      >
        РЕЄСТРАЦІЯ
      </NavLink>
    </header>
  );
};

export default Header;
