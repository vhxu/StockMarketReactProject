import React, { Component } from 'react';

class StockBar extends Component {


  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      return (
        <div className='stock-bar'>
          <div className='stock-bar-price'>${info.latestPrice}</div>
          <div className='stock-bar-info'>
            <div>
              <div>{info.change+'('+(100 * info.changePercent).toFixed(2) +'%'+')'} TODAY</div>
              <div style={{fontWeight: "bold"}}>{info.symbol}</div>
            </div>
            <div>
              <div>{info.primaryExchange}</div>
              <div>{info.companyName} | Common Stock</div>
            </div>
          </div>

        </div>

      )

    } else {
      return null
    }
  }
}

export default StockBar;
