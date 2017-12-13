import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import { selectStock } from '../actions/index';
import { bindActionCreators} from 'redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import StockInfo from '../components/stock_info';
import StockBar from '../components/stock_bar';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      console.log(this.props.stock);
      return this.props.stock.map((stock, i) => {
        var dataToday = stock.data.chart.slice(90,479).map((dayOneData, i) => {
          if (dayOneData.high != 0) {
            return dayOneData.high;
          } else {
            return  stock.data.chart[i-5+90].high;
          }

        })
        console.log(dataToday);
        return (
          <div className='stock-price'key={i} onClick={() => this.props.selectStock(stock.data.quote.symbol)}>
            <div>
              <div>{stock.data.quote.symbol}</div>
              <div>{stock.data.quote.companyName}</div>
            </div>
            <div className ='sparklines'>
              <Sparklines  data={dataToday}>
                <SparklinesLine color="green" style={{fill: 'none'}} />
                <SparklinesReferenceLine type='avg' style={{stroke:'grey', strokeDasharray: '2, 2'}}/>
              </Sparklines>
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
  return { stock: state.stock,
  activeStock: state.activeStock};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectStock: selectStock }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
