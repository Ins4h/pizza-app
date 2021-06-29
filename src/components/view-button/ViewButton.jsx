import React from "react";
import styles from "./viewButton.module.scss";
import { ImList, ImTable2 } from "react-icons/im";

const ViewButton = ({ viewButtonImg, setIsGrid, isGrid }) => {
  return (
    <div className={styles.button_wrapper}>
      <button
        className={styles.view_button}
        onClick={() => {
          setIsGrid(false);
        }}
      >
        <ImList />
      </button>
      <button
      data-testid='grid-button'
        className={styles.view_button}
        onClick={() => {
          setIsGrid(true);
        }}
      >
        <ImTable2 />
      </button>
    </div>
  );
};

export default ViewButton;
