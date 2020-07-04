import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {
  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem('Learn React!'), 
      this.createTodoItem('Build Awesome App!'), 
      this.createTodoItem('Upload to hosting!')
    ],
    term: '',
    filter: 'all' // active, all, done

  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

  addItem = (text)  => {
   

    // add element in array

    this.setState(( {todoData} ) => {
      
      const newArray = [...todoData, this.createTodoItem(text)];
      
      return {
        todoData: newArray
      }
    });
  };

toggleProperty(arr, id, propName) {
  const idx = arr.findIndex((el) => el.id === id);
  const oldItem = arr[idx];
  const newItem = {...oldItem, [propName]: !oldItem[propName] };

  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
}

onToggleImportant = (id) => {
  this.setState(( {todoData} ) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'important')
    };
  }); 
};

onToggleDone = (id) => {
  this.setState(( {todoData} ) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'done')
    };
  }); 
};

search(items, term) {
  if(items.length === 0) {
    return items;
  }

  return items.filter((item) => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
  });
}

filter(items, filter) {

  switch(filter) {
    case 'all':
      return items;
    case 'active': 
      return items.filter((item) => !item.done);
    case 'done': 
      return items.filter((item) => item.done);
    default:
      return items;
  }
}

onSearchChange = (term) => {
  this.setState({ term });
};

onFilterChange = (filter) => {
  this.setState({ filter });
};

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    const done = todoData.filter((el) => el.done).length;
    const toDo = todoData.length - done;

    return (
      <div>
        <AppHeader toDo = { toDo } done = { done } />
        <div className="d-flex top-panel">
          <SearchPanel onSearchChange={ this.onSearchChange } />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        
        <TodoList 
          todos = { visibleItems }
          onDeleted={ this.deleteItem } 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={ this.addItem }/>
      </div>
    );
  }
};