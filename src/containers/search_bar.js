import React, {Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.enterInput = this.enterInput.bind(this);
  }

  enterInput(event) {
    this.setState({term:event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input placeholder="Enter Stock Symbol" value={this.state.term} onChange={this.enterInput} />
        <button>Submit</button>
      </form>
    )
  }
}
