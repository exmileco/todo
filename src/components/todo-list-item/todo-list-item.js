import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
   
   render() {
      const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

      let classNames = 'todo-list-item';
      if(done) {
         classNames += ' done';
      }

      if (important) {
         classNames += ' important';
      }
      return (
         <span className={classNames}>
            <span className="todo-list-item-label mr-auto" 
                  onClick= { onToggleDone } >
                  { label }
            </span>
   
            <button type="button" className="btn btn-outline-success btn-small" onClick={onToggleImportant}>
               <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-small" onClick={onDeleted}>
               <i className="fa fa-trash-o" />
            </button>
         </span>
      );
   }
}