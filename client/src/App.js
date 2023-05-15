import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import EntryPage from './pages/EntryPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage/>}
            />
      
            <Route 
              path="/EntryPage" 
              element={<EntryPage/>}
            />
            <Route 
              path="/Profilepage" 
              element={<ProfilePage/>}
            />
          
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
