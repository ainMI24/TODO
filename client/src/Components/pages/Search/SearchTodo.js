// import faker from 'faker'
import React from 'react';
import { useState, useEffect} from 'react';
import './search.css';
import { LOAD_NOTES } from '../../../GraphQL/Queries';
import {useQuery} from '@apollo/client';


function SearchTodo() {

  const {loading, error, data} = useQuery(LOAD_NOTES);
  
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchText(e.target.value);
  };

  useEffect (() => {
    const results = data.filter(data =>
      data.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
  }, [searchText]);

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
          <li>{item}</li>
        ))}
      </ul>
      </div>
     
    </div>
  
  )

}

export default SearchTodo
