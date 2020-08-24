import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { render } from "@testing-library/react";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <NavLink
            to="/"
            exact
            className={styles.nav_btn}
            activeClassName="nav_btn_active"
          >
            HOME
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/movies"
            className={styles.nav_btn}
            activeClassName="nav_btn_active"
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
