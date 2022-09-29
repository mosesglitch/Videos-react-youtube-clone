import React, { Component } from "react";

class SearchBar extends Component {
  state = { text: "" };
  onInputChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    //TODO: callback from parent component
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
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
