import React from 'react';
import { connect } from 'react-redux';
import LoadChartData from '../LoadChartData';

const StockChart = ({ stockData, company }) => {
  const { ohlcData, volumes } = stockData;
  let groupingUnits = [
    [
      'week', // unit name
      [1] // allowed multiples
    ],
    ['month', [1, 2, 3, 4, 6]]
  ];
  const chartOptions = {
    chart: {
      height: 500,
      maxWidth: 700
    },
    title: {
      text: `${company} Stock Prices`
    },
    yAxis: [
      {
        labels: {
          align: 'left'
        },
        height: '80%',
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: 'left'
        },
        top: '80%',
        height: '20%',
        offset: 0
      }
    ],
    series: [
      {
        type: 'ohlc',
        name: `${company} Stock Price`,
        data: ohlcData,
        dataGrouping: {
          units: groupingUnits
        }
      },
      {
        type: 'column',
        name: `${company} Volume`,
        data: volumes,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: true
            }
          }
        }
      ]
    }
  };
  return <LoadChartData chartOptions={chartOptions} />;
};
const mapStateToProps = state => {
  return {
    stockData: state.stockData
  };
};

export default connect(mapStateToProps, null)(StockChart);
