import React from 'react';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';

const SearchPanel = () => {
   return (
     <span className="d-flex input-group">
        <input type="text" className="form-control" placeholder="type to search" />
        <ItemStatusFilter />
     </span>
   );
 };
 
export default SearchPanel;