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

import LoginForm from "./Components/pages/LoginForm";
// import GetUsers from "./Components/pages/GetUsers";
import Todos from "./Components/Todos";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
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
      {/* <GetUsers/> */}
    </ApolloProvider>
  );
}

export default App;
