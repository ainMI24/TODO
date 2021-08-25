import React from 'react';
import { useState, useEffect} from 'react';
import './search.css';
import { LOAD_NOTES } from '../../../GraphQL/Queries';
import {useQuery} from '@apollo/client';

function SearchTest() {

    const {loading, error, data} = useQuery(LOAD_NOTES);
  
    console.log(data.getNotes);
    
    return (
        <div className={"searchelement"}>
        <div>
            <h1>Real Data</h1>
            {/* {data.map(item => {
                return `${item.id} with ${item.url}`
            })} */}
        </div>
        </div>
    )
    
}

export default SearchTest
