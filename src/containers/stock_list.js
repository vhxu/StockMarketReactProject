import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import { selectStock, deleteStock } from '../actions/index';
import { bindActionCreators} from 'redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import SearchBar from '../containers/search_bar';
import StockInfo from '../components/stock_info';
import StockBar from '../components/stock_bar';

class StockList extends Component {

  renderStockList() {
    if (this.props.stock.length > 0) {
      // console.log(this.props.stock);
      return this.props.stock.map((stock, i) => {
        if (stock.data.quote.change > 0) {
          var stockColor = '#29ce9c';
        } else {
          var stockColor = '#fe4f36';
        }
        var dataToday = stock.data.chart.slice(90,479).map(dayOneData => {
          return dayOneData.high;
        })
        var dataTodayFiltered = dataToday.filter(dayOneDataFilter => dayOneDataFilter > 0);
        // console.log(dataToday);
        // console.log(dataTodayFiltered);
        if (stock.data.quote.symbol === this.props.activeStock.data.quote.symbol) {
          return (
            <div className='stock-price selected' key={i}>
              <div className='symbol-name'>
                <div>{stock.data.quote.symbol}</div>
                <div className='grey' style={{fontSize:'14px'}}>{stock.data.quote.companyName}</div>
              </div>
              <div className='sparklines'>
                <Sparklines  data={dataTodayFiltered} width={400} height={100}>
                  <SparklinesLine color={stockColor} style={{fill: 'none'}} />
                  <SparklinesReferenceLine type='avg' style={{stroke:'grey', strokeDasharray: '2, 2'}}/>
                </Sparklines>
              </div>
              <div className='percent-change'>
                  <div style={{backgroundColor:stockColor}}>{(100 * stock.data.quote.changePercent).toFixed(2) +'%'}</div>
              </div>
            </div>
          )
        } else {
          return (
            <div className='stock-price-container' key={i}>
              <div className='stock-price not-selected'  onClick={() => this.props.selectStock(stock.data.quote.symbol)}>
                <div className='symbol-name'>
                  <div>{stock.data.quote.symbol}</div>
                  <div className='grey' style={{fontSize:'14px'}}>{stock.data.quote.companyName}</div>
                </div>
                <div className='sparklines'>
                  <Sparklines  data={dataTodayFiltered} width={400} height={100}>
                    <SparklinesLine color={stockColor} style={{fill: 'none'}} />
                    <SparklinesReferenceLine type='avg' style={{stroke:'grey', strokeDasharray: '2, 2'}}/>
                  </Sparklines>
                </div>
                <div className='percent-change'>
                    <div style={{backgroundColor:stockColor}}>{(100 * stock.data.quote.changePercent).toFixed(2) +'%'}</div>
                </div>
              </div>
              <div className='delete' onClick={() => this.props.deleteStock(i)}></div>
            </div>
          )
        }

      })
    }
  }

  renderChart() {
     if(this.props.stock.length > 0) {
      var timeSeries = this.props.activeStock.data.chart;
      // console.log(this.props.activeStock);
      var data = timeSeries.map(stockData => {
        return [new Date(stockData.date).getTime(), stockData.close];
      })
      // console.log(data);
      Highcharts.stockChart('Chart', {
        rangeSelector: {
          selected: 1
        },
        series:[{
          name: this.props.activeStock.data.quote.symbol,
          data: data
        }]
      });
    }
  }


  render() {
    if (this.props.stock) {
      return (
        <div className='list-chart'>
          <div className='stock-list'>
            <SearchBar/>
            <div>{this.renderStockList()}</div>
          </div>
          <div className='chart-info'>
            <StockBar stockInfo={this.props.activeStock}/>
            <div id='Chart'><div>{this.renderChart()}</div></div>
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
  return bindActionCreators({ selectStock: selectStock, deleteStock: deleteStock }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
