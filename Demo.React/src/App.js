import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY="AIzaSyDlw_E_mwaDv27xK9zVMMxo-5JjbwQbPcI";

class App extends Component {
  constructor(props){
    super(props);
    this.state={videos:[]};

    YTSearch({key:API_KEY,term:'surfboards'},(videos) =>{
      this.setState({videos});
  });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Mahmoud Ahmed try touch with React :)</h1>
        <SearchBar/>
        <VideoList className="video-list" videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
