import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";


import theme from './theme.js';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import cache from './cache.js';
import Opportunity from './pages/Opportunity';


const client = new ApolloClient({
  uri: 'https://graphcool-staging.goodsted.com/simple/v1/ckbc9i6ru00040106zqifwy16',
  cache: cache,
});



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />

          <Switch>
            {/*PAGES with default theme and default gql client*/}
            <Route path="/opportunities">
              <App />
            </Route>
            <Route path="/opportunity/:id">
              <Opportunity />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>

        </ApolloProvider>
      </ThemeProvider>  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
