import React, { Component } from "react";

class SearchBar extends Component {
  state = { text: "" };
  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
            {this.state.text}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
