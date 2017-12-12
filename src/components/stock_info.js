import React, { Component } from 'react';

class StockInfo extends Component {
  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      return (
        <div>
          <div>{info.companyName}</div>
          <div>Open {info.open}</div>
          <div>Prev Close {info.previousClose}</div>
          <div>High {info.high}</div>
          <div>Low {info.low}</div>
          <div>Vol {info.latestVolume}</div>
          <div>P/E {info.peRatio}</div>
          <div>52W High {info.week52High}</div>
          <div>52W Low {info.week52Low}</div>
          <div> Avg Vol {info.avgTotalVolume}</div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default StockInfo;
