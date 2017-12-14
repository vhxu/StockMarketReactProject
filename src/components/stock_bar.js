import React, { Component } from 'react';

class StockBar extends Component {


  render() {
    if (this.props.stockInfo) {
      const info = this.props.stockInfo.data.quote;
      if (info.change > 0) {
        var stockColor = '#29ce9c';
      } else {
        var stockColor = '#fe4f36';
      }
      return (
        <div className='stock-bar'>
          <div className='stock-bar-price'>${info.latestPrice}</div>
          <div className='stock-bar-info'>
            <div>
              <div style={{color: stockColor}}>{info.change+' ('+(100 * info.changePercent).toFixed(2) +'%'+') '} <span style={{color:'black'}}> TODAY</span></div>
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
