import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStockData, selectStock } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.enterInput = this.enterInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  enterInput(event) {
    this.setState({term:event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchStockData(this.state.term);
    this.props.selectStock(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder="Enter Stock Symbol" value={this.state.term} onChange={this.enterInput} />
        </form>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStockData, selectStock }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
