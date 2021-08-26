import React from 'react';
import { useState, useEffect} from 'react';
import './search.css';
// import { LOAD_NOTES } from '../../../GraphQL/Queries';
import {useQuery, gql} from '@apollo/client';

const LOAD_NOTES = gql`
  query Query {
  getNotes {
    id
    todo
    status
  }
}`;

function SearchTodo() {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const {loading, error, data} = useQuery(LOAD_NOTES, {pollInterval: 500});

  useEffect(() => {
    const results = data.getNotes.filter(item => item.todo.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(results);
  }, [data.getNotes, searchText]);

  console.log(searchResults);
  const handleChange = e => {
    setSearchText(e.target.value);
  };

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
  );
}

export default SearchTodo;
