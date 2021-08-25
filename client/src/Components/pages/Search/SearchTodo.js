import React from 'react';
import { useState, useEffect} from 'react';
import './search.css';
import { LOAD_NOTES } from '../../../GraphQL/Queries';
import {useQuery} from '@apollo/client';

function SearchTodo() {

  const {loading, error, data} = useQuery(LOAD_NOTES);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //for test
  console.log(data.getNotes.map(item => item.todo));

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const results = data.getNotes.filter(item => 
        item.todo.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(results);
    console.log(results);
  }, [data.getNotes, searchText]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={"searchelement"}>
      <div >
        <input
          type='text'
          placeholder='Search...'
          value={searchText}
          onChange={handleChange}
        />
        <ul>
        {searchResults.map(item => (
          <li>{item.todo}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default SearchTodo
