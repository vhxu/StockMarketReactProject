import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';

import StockInfo from '../components/stock_info';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      return this.props.stock.map((stock, i) => {
        return (
          <div id='Stock-price'key={i}>
            <div>
              <div>{stock.data.quote.symbol}</div>
              <div>{stock.data.quote.companyName}</div>
            </div>

            <div>{stock.data.quote.close}</div>
            <div>{100 * stock.data.quote.changePercent +'%'}</div>
          </div>

        )
      })
    }
  }

  componentDidUpdate() {
    if(this.props.stock.length > 0) {
      var timeSeries = this.props.stock[0].data.chart;
      console.log(this.props.stock);
      var data = timeSeries.map(stockData => {
        return [new Date(stockData.date).getTime(), stockData.close];
      })
      console.log(data);
      Highcharts.stockChart('Chart', {
        rangeSelector: {
          selected: 1
        },
        series:[{
          name: this.props.stock[0].data.quote.symbol,
          data: data
        }]
      });
    }
  }


  render() {
    if (this.props.stock) {
      return (
        <div className='list-chart'>
          <div>{this.renderStockList()}</div>
          <div className='chart-info'>
            <div id='Chart'></div>
            <StockInfo stockInfo={this.props.stock[0]}/>
          </div>
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
