import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem( this.state.label );
    this.setState({
      label: ''
    });
  };

  render () {

    return (
     <form className="d-flex input-group" onSubmit={this.onSubmit}>
        <input type="text" id="newTaskItem" className="form-control" onChange={this.onLabelChange} placeholder="type in new task" 
        value={this.state.label} />
        <button type="button" 
          className="btn btn-outline-info btn-small" 
          onClick={this.onSubmit}
          >
            <i className="fa fa-plus-square"></i>
        </button>
     </form>
    );
  }
}

