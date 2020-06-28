import React from 'react';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';

const SearchPanel = () => {
   return (
     <span className="d-flex input-group">
        <input className="search-input mr-auto" placeholder="type to search" />
        <ItemStatusFilter />
     </span>
   );
 };
 
export default SearchPanel;