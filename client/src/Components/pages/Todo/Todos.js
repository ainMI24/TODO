import React from 'react'
import SearchTodo from '../Search/SearchTodo'
import {Navbar} from 'react-bootstrap';
import GetUsers from '../Login/GetUsers';
import SearchTest from '../Search/searchTest';

//this one will combine with CJ part
function Todos() {
    return (
            <div>
            <SearchTodo/>
            <GetUsers/>
            {/* <SearchTest/> */}
            Logged In!  
            </div>
    )
}

export default Todos
