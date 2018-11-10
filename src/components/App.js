import React, { Component } from 'react';  

import TodoForm from '../containers/todoForm';
import TodoList from '../containers/todoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
