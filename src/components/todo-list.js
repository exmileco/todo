import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
   return (
     <ul>
       <li>< TodoListItem label="Learn React"/></li>
       <li>< TodoListItem label="Build React App" important/></li>
     </ul>
   );
 };

 export default TodoList;