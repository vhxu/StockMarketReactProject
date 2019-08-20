import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStockData, selectStock } from '../actions/index';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      suggestions2: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    const url = 'https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_2777d1c46940428293b623f5e605b0e0';
          //'https://api.iextrading.com/1.0/ref-data/symbols';
    axios.get(url).then(response => {
      this.setState({
        suggestions: response.data,
        suggestions2: response.data
      });
    })
  }

  componentWillMount() {
    this.props.fetchStockData('TSLA');
    this.props.selectStock('TSLA');
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.suggestions2.filter(symbol =>
      symbol.symbol.toLowerCase().slice(0, inputLength) === inputValue
    ).slice(0,6);
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  getSuggestionValue(suggestion) {
    return suggestion.symbol;
  };

  onSuggestionSelected(event) {
    event.preventDefault();
    this.props.fetchStockData(this.state.value);
    this.props.selectStock(this.state.value);
    this.setState({
      value: ''
    });
  }

  renderSuggestion(suggestion) {
    return suggestion.symbol
  }


  onSuggestionsClearRequested() {
    const url = 'https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_2777d1c46940428293b623f5e605b0e0';
          //'https://api.iextrading.com/1.0/ref-data/symbols';
    axios.get(url).then(response => {
      this.setState({
        suggestions: response.data
      });
    })
  };

    onFormSubmit(event) {
      event.preventDefault();
      this.props.fetchStockData(this.state.value);
      this.props.selectStock(this.state.value);
      this.setState({ value: ''});
    }


  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter Stock Symbol',
      value,
      onChange: this.onChange,
    };

    return (
      <form onSubmit={this.onFormSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </form>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStockData, selectStock }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
