import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <Link to="/">
      <div className={styles.header_container}>
        <img
          className={styles.header_image}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ed48562307283.5a8c3ca621c46.png"
          alt="pizza"
        />
        <h2 className={styles.header_title}>{title}</h2>
      </div>
    </Link>
  );
}

export default Header;
