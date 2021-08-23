// import faker from 'faker'
import React from 'react'
// import { Search, Grid} from 'semantic-ui-react'
import { useState, useEffect} from 'react';
import './search.css';

function SearchTodo() {

  const [searchFilter, setSearchFilter] = useState('');

  const { loading, error, data } = useQuery(FIND_NOTES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])


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