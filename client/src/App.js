import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import EntryPage from './pages/EntryPage';

import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Routes>
             <Route
              path="/"
              element={<EntryPage />}
            />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
