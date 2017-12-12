import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import { selectStock } from '../actions/index';
import { bindActionCreators} from 'redux';

import StockInfo from '../components/stock_info';
import StockBar from '../components/stock_bar';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      return this.props.stock.map((stock, i) => {
        return (
          <div className='stock-price'key={i} onClick={() => this.props.selectStock(stock)}>
            <div>
              <div>{stock.data.quote.symbol}</div>
              <div>{stock.data.quote.companyName}</div>
            </div>
            <div>{(100 * stock.data.quote.changePercent).toFixed(2) +'%'}</div>
          </div>

        )
      })
    }
  }

  componentDidUpdate() {
    //  if(this.props.stock.length > 0) {
      var timeSeries = this.props.activeStock.data.chart;
      console.log(this.props.activeStock);
      var data = timeSeries.map(stockData => {
        return [new Date(stockData.date).getTime(), stockData.close];
      })
      console.log(data);
      Highcharts.stockChart('Chart', {
        rangeSelector: {
          selected: 1
        },
        series:[{
          name: this.props.activeStock.data.quote.symbol,
          data: data
        }]
      });
    // }
  }


  render() {
    if (this.props.stock) {
      return (
        <div className='list-chart'>
          <div className='stock-list'>{this.renderStockList()}</div>
          <div className='chart-info'>
            <StockBar stockInfo={this.props.activeStock}/>
            <div id='Chart'></div>
            <StockInfo stockInfo={this.props.activeStock}/>
          </div>
        </div>

      )
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { stock: state.stock,
  activeStock: state.activeStock};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStock: selectStock }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
