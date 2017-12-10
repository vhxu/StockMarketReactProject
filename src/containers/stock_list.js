import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      return this.props.stock.map((stock, i) => {
        var newClose = stock['Time Series (Daily)'][Object.keys(stock['Time Series (Daily)'])[0]]['4. close'];
        var oldClose = stock['Time Series (Daily)'][Object.keys(stock['Time Series (Daily)'])[1]]['4. close'];
        return (
          <div id='Stock-price'key={i}>
            <div>{stock['Meta Data']['2. Symbol']}</div>
            <div>{Number(newClose, 10).toFixed(2)}</div>
            <div>{(100*(newClose - oldClose)/oldClose).toFixed(2) +'%'}</div>
          </div>

        )
      })
    }
  }

  renderChart() {
    if(this.props.stock.length > 0) {
      var timeSeries = this.props.stock[0]['Time Series (Daily)'];
      var data = Object.keys(timeSeries).map((date, i) => {
        return [new Date(date).getTime(), Number(timeSeries[date]['1. open'])];
      })
      data.reverse();
      console.log(data);
      Highcharts.stockChart('Chart', {
        rangeSelector: {
          selected: 1
        },
        series:[{
          name: this.props.stock[0]['Meta Data']['2. Symbol'],
          data: data
        }]
      });
    }

  }

  render() {
    if (this.props.stock) {
      return (
        <div className='list-chart'>
          <div id='Stock-list'>{(this.renderStockList())}</div>
          <div>{(this.renderChart())}</div>
          <div id='Chart'></div>
        </div>

      )
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { stock: state.stock};
}

export default connect(mapStateToProps)(StockList);
