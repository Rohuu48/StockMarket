import React from 'react';
import IBM_LOGO from './../../assets/companies/IBM.png';
import TCS_LOGO from './../../assets/companies/TCS.png';
import APPLE_LOGO from './../../assets/companies/APPLE.png';
import MICROSOFT_LOGO from './../../assets/companies/MICROSOFT.png';
import styles from './InputBox.module.css';

const InputBox = ({ handleChange }) => {
  return (
    <div className={styles.container}>
      <span> SELECT THE COMPANY OF YOUR CHOICE:</span>
      <div className={styles.logos}>
        <div onClick={() => handleChange('IBM')}>
          <img className={styles.image} src={IBM_LOGO} />
        </div>
        <div onClick={() => handleChange('TCS')}>
          <img className={styles.image} src={TCS_LOGO} />
        </div>
        <div onClick={() => handleChange('AAPL')}>
          <img className={styles.image} src={APPLE_LOGO} />
        </div>
        <div onClick={() => handleChange('MSFT')}>
          <img className={styles.image} src={MICROSOFT_LOGO} />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
