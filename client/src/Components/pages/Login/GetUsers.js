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
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (loading) return (`Loading...`);
  if (error) return (`Error...${error.message}`);

  return (
    <div>
      <Header as='h1' content='Responsive UI Examples' style={style.h1} textAlign='center' />
        <Header as='h2' content='Basic Responsive' style={style.h2} textAlign='center' />
        <Header as='h3' textAlign='center' style={style.h3} content='Container' />
        <Container>
        <Segment.Group>
            <Segment>
            
            </Segment>
            
        </Segment.Group>
        </Container>
     
    </div>
  );
}

export default GetUsers;
