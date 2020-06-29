import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {

  render () {
    const { onAddItem } = this.props;

    return (
     <span className="d-flex input-group">
        <input type="text" id="newTaskItem" className="form-control" placeholder="type in new task" />
        <button type="button" 
          className="btn btn-outline-info btn-small" 
          onClick={ () => { 
            const inputBox = document.getElementById( 'newTaskItem' );
            onAddItem( inputBox.value );
            inputBox.innerHTML = ""; 
            } } >
            <i className="fa fa-plus-square"></i>
        </button>
     </span>
    );
  }
}

