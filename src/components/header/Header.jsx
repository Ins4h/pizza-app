import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <Link to="/">
      <div className={styles.header_container}>
        <h2 className={styles.header_title}>{title}</h2>
      </div>
    </Link>
  );
}

export default Header;
