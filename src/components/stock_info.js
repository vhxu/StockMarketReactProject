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
        <div className='stock-info'>
          <div>
            <div>Stats</div>
            <div className='info'>
              <div className='stock-info1'>
                <div>Open {info.open.toFixed(2)}</div>
                <div>Prev Close {info.previousClose.toFixed(2)}</div>
                <div>High {info.high.toFixed(2)}</div>
                <div>Low {info.low.toFixed(2)}</div>
                <div>Mkt Cap {(info.marketCap/1000000000).toFixed(1)}B</div>
              </div>
              <div className='stock-info2'>
                <div>Vol {(info.latestVolume/1000000).toFixed(1)}M</div>
                <div>P/E {info.peRatio}</div>
                <div>52W High {info.week52High.toFixed(2)}</div>
                <div>52W Low {info.week52Low.toFixed(2)}</div>
                <div> Avg Vol {(info.avgTotalVolume/1000000).toFixed(1)}M</div>
              </div>
            </div>
          </div>
          <div>
            <div>News</div>
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
