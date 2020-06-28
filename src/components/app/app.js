import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
// import ItemStatusFilter from './components/item-status-filter';
import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Learn React!', important: false, id: 1, isDone: true },
      { label: 'Build Awesome App!', important: true, id: 2, isDone: true },
      { label: 'Upload to hosting!', important: false, id: 3, isDone: false }
    ]
  };

  deleteItem = (id) => {
    this.setState(( {todoData} ) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  render() {
    const done = this.state.todoData.filter((el) => el.isDone === true).length;
    const toDo = this.state.todoData.length - done;
    console.log(done, toDo);

    return (
      <div>
        <AppHeader toDo = { toDo } done = { done } />
        <SearchPanel />
        <TodoList 
          todos = { this.state.todoData }
          onDeleted={ this.deleteItem } />
      </div>
    );
  }
};