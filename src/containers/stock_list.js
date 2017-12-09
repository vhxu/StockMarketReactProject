import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockList extends Component {
  renderStock() {
    if (this.props.stock.length > 0) {
      var timeSeries = this.props.stock[0]['Time Series (Daily)'];
      return Object.keys(timeSeries).map((key, i) => {
        return <div key={i}>{timeSeries[key]['1. open']}</div>
      })
    }
  }

  render() {
    if (this.props.stock) {
      return (
        <div>{(this.renderStock())}</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { stock: state.stock};
}

export default connect(mapStateToProps)(StockList);
