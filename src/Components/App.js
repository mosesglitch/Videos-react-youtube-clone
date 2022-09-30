import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
class App extends Component {
  state = { videos: [] };
  onTextSubmit = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
