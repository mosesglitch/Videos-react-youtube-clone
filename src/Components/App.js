import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTextSubmit = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (video) => {
    console.log("from video", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
