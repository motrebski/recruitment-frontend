import React from 'react';
import { Link } from "react-router-dom";
import styles from './NotFound.module.scss';

export const NotFound = () => {

  return(
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <span>404</span>
        <span>Page not found!</span>
      </div>
      <Link to='/'><button className={styles.homeButton}>Home Page</button></Link>
    </div>
  );
}
