import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      return this.props.stock.map((stock, i) => {
        return (
          <div id='Stock-price'key={i}>
            <div>{stock.data.quote.symbol}</div>
            <div>{stock.data.quote.close}</div>
            <div>{100 * stock.data.quote.changePercent +'%'}</div>
          </div>

        )
      })
    }
  }

  renderChart() {
    if(this.props.stock.length > 0) {
      var timeSeries = this.props.stock[0].data.chart;
      // var timeSeries = this.props.stock[0]['Time Series (Daily)'];
      console.log(this.props.stock);
      var data = timeSeries.map(stockData => {
        return [new Date(stockData.date).getTime(), stockData.close];
      })
      console.log(data);
      // var data = Object.keys(timeSeries).map((date, i) => {
      //   return [new Date(date).getTime(), Number(timeSeries[date]['1. open'])];
      // })
      // data.reverse();
      // console.log(data);
      Highcharts.stockChart('Chart', {
        rangeSelector: {
          selected: 1
        },
        series:[{
          name: 'Test',
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
