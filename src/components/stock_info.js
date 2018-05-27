import React, { Component } from 'react';

class StockInfo extends Component {

  renderNews() {
    if (this.props.stockInfo) {
      return this.props.stockInfo.data.news.slice(0,3).map((info, i) => {
        return(
          <div key={i}>
            <div className='news-headline'>{info.headline}</div>
            <div className='news-source grey'>{info.source}</div>
          </div>

        )
      })
    }
  }

  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      console.log(info.open.toFixed(2));
      return (
        <div className='stock-info'>
          <div className='stats'>
            <h3>Stats</h3>
            <div className='info'>
              <div className='stock-info1'>
                <div className='border'>
                  <span className='grey'>OPEN</span>
                  <span>{info.open.toFixed(2)}</span>
                </div>
                <div className='border'>
                  <span className='grey'>PREV CLOSE</span>
                  <span>{info.previousClose.toFixed(2)}</span>
                </div>
                <div className='border'>
                  <span className='grey'>HIGH</span>
                  {/*<span>{info.high.toFixed(2)}</span> */}
                </div>
                <div className='border'>
                  <span className='grey'>LOW</span>
                  {/*<span>{info.low.toFixed(2)}</span> */}
                </div>
                <div>
                  <span className='grey'>MKT CAP</span>
                  <span>{(info.marketCap/1000000000).toFixed(1)}B</span>
                </div>
              </div>
              <div className='stock-info2'>
                <div className='border'>
                  <span className='grey'>VOLUME</span>
                  <span>{(info.latestVolume/1000000).toFixed(1)}M</span>
                </div>
                <div className='border'>
                  <span className='grey'>P/E</span>
                  <span>{info.peRatio}</span>
                </div>
                <div className='border'>
                  <span className='grey'>52W HIGH</span>
                  <span>{info.week52High.toFixed(2)}</span>
                </div>
                <div className='border'>
                  <span className='grey'>52W LOW</span>
                  <span>{info.week52Low.toFixed(2)}</span>
                </div>
                <div>
                  <span className='grey'>AVG VOLUME</span>
                  <span>{(info.avgTotalVolume/1000000).toFixed(1)}M</span>
                </div>
              </div>
            </div>
          </div>
          <div className='news-container'>
            <h3>News</h3>
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
