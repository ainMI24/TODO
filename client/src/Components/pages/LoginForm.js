import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "/Users/User/Downloads/Todoclient/client/src/GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';



function LoginForm() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  // const [id, setID] = useState("");

  const [createUser, { data, error}] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        email: email,
        
      },
    });

    if (error) {
      console.log(error);
    }

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
