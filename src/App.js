import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

class App extends Component {
  constructor(props) {
    super(props);
    // You can initialize state or perform other setup here if needed
  }

  render() {
    return (
      <>
      <div>
        <NavBar></NavBar>
        <News></News>
      </div>
      </>
    );
  }
}

export default App;
