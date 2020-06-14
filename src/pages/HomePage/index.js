import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NiftyDataActions from '../../actions/niftyData';
import * as StockDataActions from '../../actions/stockData';
import InputBox from '../../components/InputBox';
import StockChart from '../../containers/Chart/StockChart';
import NiftyChart from '../../containers/Chart/NiftyChart';
import Loader from '../../components/Loader';
import HorizontalDivider from './../../components/Divider/HorizontalDivider';
import styles from './HomePage.module.css';

const HomePage = ({ getStockData, getNiftyData, stockData }) => {
  const [company, setCompany] = React.useState('');
  const { isLoading } = stockData;
  const handleChange = val => {
    setCompany(val);
    getStockData(val);
  };
  useEffect(() => {
    getNiftyData();
  }, []);

  return (
    <div>
      <InputBox handleChange={handleChange} />
      <HorizontalDivider />
      {company &&
        (isLoading ? (
          <Loader />
        ) : (
          <div className={styles.charts}>
            <StockChart company={company} />
            <NiftyChart />
          </div>
        ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    stockData: state.stockData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getStockData: StockDataActions.getStockData,
      getNiftyData: NiftyDataActions.getNiftyData
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
