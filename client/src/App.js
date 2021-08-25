import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginForm from "./../../client/src/Components/pages/Login/LoginForm";
import Todos from "./../../client/src/Components/pages/Todo/Todos";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/">
              <LoginForm />
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
