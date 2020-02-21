import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchExchangeRate, addAmount } from '../actions';
import { Rates } from './Rates';
import { ExchangeRatePrimary } from './ExchangeRatePrimary';
import './exchangeRateTable.scss';

const ExchangeRateTable = props => {
console.log("ExchangeRateTable props", props)

    return(
        <div className="exchangeRateTable">
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
             />
            )}
            {props.exchangeRateData && !props.isLoading && (
                <div>
                    <ExchangeRatePrimary rates = {props.exchangeRateData.rates} amount={props.amount} firstCurrency={props.firstCurrency} secondCurrency={props.secondCurrency}/>
                    {/* <h3>Base Currency: {props.exchangeRateData.base}</h3> */}
                    <hr></hr>
                    <h3>Today's Date: {props.exchangeRateData.date}</h3>
                    <Rates rates = {props.exchangeRateData.rates} amount={props.amount}/>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      exchangeRateData: state.exchangeRateData,
      error: state.error,
      amount: state.amount,
      firstCurrency: state.firstCurrency,
      secondCurrency: state.secondCurrency
    }
  }
  
  export default connect(mapStateToProps, {fetchExchangeRate, addAmount})(ExchangeRateTable);