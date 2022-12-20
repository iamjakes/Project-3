import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import Reviews from './pages/Reviews';
import Food from './pages/Food'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header></Header>
          <section className = "container">
            <Routes>
              <Route
              path="/"
              element={<Home/>}
              />
              <Route
              path="/entertainment"
              element={<Entertainment />}
              />
              <Route
              path="/sports"
              element={<Sports />}
              />
              <Route
              path="/food"
              element={<Food />}
              />
              <Route
              path="/reviews"
              element={<Reviews />}
              />
            </Routes>
          </section>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
