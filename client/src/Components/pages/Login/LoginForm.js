import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "./../../../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function LoginForm() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  
  const [createUser, {loading, error}] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        id: uuidv4(),
        email: email,
      },
    });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
    history.push("/todos");
  };
  
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='yellow' textAlign='center'>
        Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
          fluid icon='mail' 
          iconPosition='left' 
          placeholder='E-mail'
          onChange={(e) => {
            setEmail(e.target.value);
          }} 
          />
          <Button color='yellow' fluid size='large' onClick={addUser} >
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  );
}
export default LoginForm;
