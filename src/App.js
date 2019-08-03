import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  render (){
    return(
      <div>
        <h1>To Do List</h1>
        <List />
      </div>
    )
  }
}

export default App;
