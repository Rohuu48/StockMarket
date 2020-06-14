import React from 'react';
import LOADER_GIF from './../../assets/loader/loader.gif';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.gif} src={LOADER_GIF} />
    </div>
  );
};

export default Loader;
