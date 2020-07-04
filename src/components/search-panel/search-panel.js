import React, { Component } from 'react';
// import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';
// import TodoListItem from '../todo-list-item';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });

    this.props.onSearchChange(term);

  };

  render() {
    return (
          <input type="text" className="form-control" onChange={this.onSearchChange} placeholder="type to search" value={this.state.term} />
    );
  }
 }