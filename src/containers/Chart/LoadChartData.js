import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styles from './Chart.module.css';

const LoadChartData = ({ chartOptions }) => {
  return (
    <div className={styles.container}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={chartOptions}
      />
    </div>
  );
};

export default LoadChartData;
