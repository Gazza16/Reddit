import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import TitleCard from './components/TitleCard'
import { 
  Hero,
  Container,
  Title,
  SubTitle,
  Media,
  Image,
  Content,
  Level,
  Icon,
  Delete
} from 'reactbulma'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleCard />

        <Post />
        <Post />
      </div>
    );
  }
}

export default App;
