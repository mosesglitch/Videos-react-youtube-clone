import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTextSubmit("cars");
  }
  onTextSubmit = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({
      selectedVideo: response.data.items[0],
      videos: response.data.items,
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
