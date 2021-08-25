import React, { useEffect, useState } from "react";
import { useQuery} from "@apollo/client";
import { LOAD_USERS } from "../../../GraphQL/Queries";
import {
  Container,
  Header,
  Segment,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (data) {
      setUsers(data.getUsers);
    }
  }, [data]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  

  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return <h1> {val.email}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
