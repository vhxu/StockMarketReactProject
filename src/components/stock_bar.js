import React, { Component } from 'react';

class StockBar extends Component {


  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      return (
        <div>
          <div>
            <div>{info.latestPrice}</div>
            <div>{info.change+'('+(100 * info.changePercent).toFixed(2) +'%'+')'} TODAY</div>
          </div>
          <div>
            <div>{info.symbol}</div>
            <div>{info.companyName} | Common Stock</div>
          </div>
        </div>

      )

    } else {
      return null
    }
  }
}

export default StockBar;
