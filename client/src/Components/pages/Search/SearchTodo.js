// import faker from 'faker'
import React from 'react';
import { useState, useEffect} from 'react';
import './search.css';
import {FIND_NOTES} from '../../../GraphQL/Queries';
import {useQuery} from '@apollo/client';

function SearchTodo() {

  const [searchFilter, setSearchFilter] = useState('');

  const { loading, error, data } = useQuery(FIND_NOTES);
  
  useEffect(() => {
    if (data) {
      setSearchFilter(data.getAllTodos)
    }
  }, [data]);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  return (
        <div className={'searchelement'}>
          <input 
          type="text" 
          placeholder="Search.." 
          name="search" 
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          ></input>
      <button type="submit">Search</button>
        </div>
  )

}

export default SearchTodo
