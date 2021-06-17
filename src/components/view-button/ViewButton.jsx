import React, { useState } from 'react';
import styles from './viewButton.module.scss';
import { ImList, ImTable2  } from 'react-icons/im';

const viewButton = ({viewButtonImg, setIsGrid, isGrid}) => {
  return (
        <div>
            <button className={styles.view_button} onClick={()=>{setIsGrid(false)}}><ImList /></button> 
            <button className={styles.view_button} onClick={()=>{setIsGrid(true)}}><ImTable2 /></button>
        </div>

    )
}

export default viewButton;
