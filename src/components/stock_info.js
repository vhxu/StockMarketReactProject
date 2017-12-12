import React, { Component } from 'react';

class StockInfo extends Component {

  renderNews() {
    if (this.props.stockInfo) {
      return this.props.stockInfo.data.news.slice(0,3).map((info, i) => {
        return(
          <div key={i}>
            <div>{info.headline}</div>
            <div>{info.source}</div>
          </div>

        )
      })
    }
  }

  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      return (
        <div>
          <div className='company-name'>{info.companyName}</div>
          <div className='stock-info'>
            <div className='info'>
              <div className='stock-info1'>
                <div>Open {info.open}</div>
                <div>Prev Close {info.previousClose}</div>
                <div>High {info.high}</div>
                <div>Low {info.low}</div>
                <div>Mkt Cap {info.marketCap}</div>
              </div>
              <div className='stock-info2'>
                <div>Vol {info.latestVolume}</div>
                <div>P/E {info.peRatio}</div>
                <div>52W High {info.week52High}</div>
                <div>52W Low {info.week52Low}</div>
                <div> Avg Vol {info.avgTotalVolume}</div>
              </div>
            </div>
            <div className='news'>
              {this.renderNews()}
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default StockInfo;
